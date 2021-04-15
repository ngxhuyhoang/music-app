import Navbar from '@components/navbar';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useStyle from './styles';

const Discover = () => {
  const styles = useStyle();

  return (
    <View style={styles.container}>
      <Navbar
        showLeading={true}
        showTrailing={true}
        renderTrailing={
          <TouchableOpacity onPress={() => {}} style={{ borderRadius: 15 }}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/30' || '' }}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
              }}
            />
          </TouchableOpacity>
        }
      />
      <View style={styles.main}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default Discover;
