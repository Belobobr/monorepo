// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import  UiKit from '@tripeverywheree/uikit/lib';

storiesOf('Button', module)
    .add('with text', () => (
        <UiKit.Button title={"sample"}/>
    ))
    .add('with some emoji', () => (
        <UiKit.Button title={"sample"} something/>
    ));

storiesOf('Avatar', module)
  .add('with text', () => (
    <UiKit.Avatar title={"sample"}/>
  ))
  .add('with some emoji', () => (
    <UiKit.Avatar title={"sample"} something/>
  ));