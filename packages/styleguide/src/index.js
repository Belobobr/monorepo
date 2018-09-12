import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
import Another from '@tripeverywheree/uikit/lib/Another';
import Hello from '@tripeverywheree/uikit/lib/Hello';

ReactDOM.render(
    <Catalog
        title='Catalog'
        pages={[
                {
                    imports: { Another, Hello },
                    path: '/',
                    title: 'Introduction',
                    content: pageLoader('intro.md'),
                },
        ]}
    />,
    document.getElementById('root')
);