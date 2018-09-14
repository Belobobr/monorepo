// @flow
import * as React from 'react';

import type { ButtonProps, AvatarProps } from '@tripeverywheree/uikit';

export type UiConfiguration = {
  logo: ?string,
  buttonComponent: React.ComponentType<ButtonProps>
};

export type ApiConfiguration = {
  host: string,
  projectUrl: string,
  port: string
};

export type Configuration = {
  uiConfiguration: UiConfiguration,
  apiConfiguration: ApiConfiguration
};
