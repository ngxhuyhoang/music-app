import { appIcon } from '@core/icons';
import React, { ReactNode } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Row from './row';

type NavbarProps = {
  showLeading: boolean;
  showTrailing: boolean;
  renderLeading?: ReactNode;
  renderTrailing?: ReactNode;
};

const Navbar = ({ showLeading = true, showTrailing = false, ...props }) => {
  const renderLeading = () => {
    if (showLeading && props.renderLeading) {
      return props.renderLeading;
    }
    if (showLeading) {
      return (
        <TouchableOpacity>
          <Image source={appIcon.arrowLeft} />
        </TouchableOpacity>
      );
    }

    return <View />;
  };

  const renderTrailing = () => {
    if (showTrailing && props.renderTrailing) {
      return props.renderTrailing;
    }
    if (showTrailing) {
      return (
        <TouchableOpacity>
          <Image source={appIcon.arrowLeft} />
        </TouchableOpacity>
      );
    }

    return <View />;
  };

  return (
    <View style={styles.container}>
      {renderLeading()}
      {renderTrailing()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Navbar;
