import React from 'react';
import { Image, Text, View } from 'react-native';
import useStyles from './styles';

const Player = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: 'https://picsum.photos/1080/1080' }}
          style={{ width: 240, height: 240, borderRadius: 120 }}
        />
        <Text
          style={{
            textAlign: 'center',
            marginTop: 16,
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Hello
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 13, color: '#fff' }}>
          Artist
        </Text>
      </View>
    </View>
  );
};

export default Player;
