import React from 'react';
import { View } from 'react-native';

type SpacerProps = {
  width: number;
  height: number;
};

const Spacer = ({ width, height }: SpacerProps) => (
  <View style={{ width, height }} />
);

export default Spacer;
