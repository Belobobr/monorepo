// currently we intentionaly don't check build type for switching styles between them

// const buildFlavorType = process.env.BUILD_FLAVOR;
// const copyFrom = buildFlavorType ? `buildFlavor/${buildFlavorType}/less/main.less` : 'buildFlavor/common/less/main.less';
// console.log(`Grunt less copyFrom: ${copyFrom}`);
// const watchDirrectory = buildFlavorType ? `buildFlavor/${buildFlavorType}/less/**` : 'buildFlavor/common/less/**';
// console.log(`Grunt watch dirrectory: ${watchDirrectory}`);

// import something from '@project/default_flavor/lib/resources/css/main.less';
// import some from 'node_modules/@project/default_flavor/lib/resources/css/main.less';

//TODO select flavor based on envconfig
const copyFrom = 'src/less/main.less';
const watchDirrectory = 'src/less/**';
const flavor = 'node_modules/@project/default_flavor/lib/resources/less/**';
const configuration = 'node_modules/@project/configuration/lib/resources/less/**';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        files: {
          'public/less.css': copyFrom,
        },
        options: {
          plugins: [
            new (require('less-plugin-autoprefix'))({ browsers: ['last 2 versions'] }),
            new (require('less-plugin-clean-css'))(),
          ],
        },
      },
    },

    watch: {
      less: {
        files: [watchDirrectory, flavor, configuration],
        tasks: ['less'],
      },
    },
  });

  // 3. Where we tell Grunt we plan to use this plug-in.

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 4. Where we tell Grunt what to do when we type 'grunt' into the terminal.

  grunt.registerTask('default', ['less']);
  grunt.registerTask('compile-less', ['less']);
};
