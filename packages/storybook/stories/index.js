// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  UiKit from '@tripeverywheree/uikit/lib';

function sample(value: string) {

}

sample(10);

storiesOf('Button', module)
    .add('with text', () => (
        <UiKit.Button title={"sample"}/>
    ))
    .add('with some emoji', () => (
        <UiKit.Button something/>
    ));