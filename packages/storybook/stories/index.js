import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  UiKit from '@tripeverywheree/uikit/lib';

storiesOf('Button', module)
    .add('with text', () => (
        <UiKit.Button/>
    ))
    .add('with some emoji', () => (
        <UiKit.Button/>
    ));