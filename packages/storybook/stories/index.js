import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '@tripeverywheree/uikit/lib/Button';

storiesOf('Button', module)
    .add('with text', () => (
        <Button/>
    ))
    .add('with some emoji', () => (
        <Button/>
    ));