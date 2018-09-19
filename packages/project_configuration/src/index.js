// @flow
import * as React from 'react';

import type { ButtonProps, AvatarProps } from '@tripeverywheree/uikit';

export type Images = {
  logo: ?string
};

export type UiConfiguration = {
  images: ?Images,
  buttonComponent: React.ComponentType<ButtonProps>
};

export type ApiConfiguration = {
  host: string,
  projectUrl: string,
  port: string
};

export type Configuration = {
  ui: UiConfiguration,
  api: ApiConfiguration
};
