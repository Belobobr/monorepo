// @flow
import React from 'react';

export type ButtonProps = {|
  title: string,
  something?: boolean
|};

function Button(props: ButtonProps) {
  return <div>Button Component</div>;
}
export default Button;
