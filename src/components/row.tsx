import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type RowProps = {
  children: ReactNode;
  style?: ViewStyle;
};

const Row = ({ children, style }: RowProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Row;
