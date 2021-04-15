import React from 'react';
import { View } from 'react-native';

type DividerProps = {
  width: number;
  height: number;
  color: string;
};

const Divider = ({ width, height = 1, color }: DividerProps) => (
  <View style={{ width, height, backgroundColor: color }} />
);

export default Divider;
