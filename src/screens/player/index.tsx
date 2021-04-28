import React from 'react';
import { Image, Text, View, NativeModules } from 'react-native';
import useStyles from './styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from '@components/spacer';

const { MediaControlModule } = NativeModules;

const Player = () => {
  const styles = useStyles();

  const onPlay = () => {
    MediaControlModule.play(
      'https://vnno-vn-5-tf-mp3-s1-zmp3.zadn.vn/1c293af60ab0e3eebaa1/5795320971578616503?authen=exp=1619795197~acl=/1c293af60ab0e3eebaa1/*~hmac=45979c21c65e3cae497dd27a65cba537&fs=MTYxOTYyMjM5NzkxNXx3ZWJWNnwxMDU1MDmUsIC4MDQyfDE3MS4yMjgdUngMjA4LjE1NA',
    );
  };

  const onPause = () => {
    MediaControlModule.pause();
  };

  return (
    <View style={styles.container}>
      <View>
        <AnimatedCircularProgress
          size={300}
          width={15}
          fill={75}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875"
          rotation={0}
          tintTransparency={true}>
          {() => (
            <Image
              source={{
                uri:
                  'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/d/7/4/f/d74fab62f3846657aedab30214558124.jpg',
              }}
              style={styles.cover}
            />
          )}
        </AnimatedCircularProgress>
        <Text style={styles.trackName}>Hello</Text>
        <Text style={styles.artistName}>Artist</Text>
        <Text style={styles.timeline}>0:00 - 3:50</Text>
      </View>

      <View style={styles.controlArea}>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>Prev</Text>
        </TouchableOpacity>
        <Spacer width={16} />
        <TouchableOpacity style={styles.controlButton} onPress={onPause}>
          <Text style={styles.controlText}>Pause</Text>
        </TouchableOpacity>
        <Spacer width={16} />
        <TouchableOpacity style={styles.controlButton} onPress={onPlay}>
          <Text style={styles.controlText}>Play</Text>
        </TouchableOpacity>
        <Spacer width={16} />
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Player;
