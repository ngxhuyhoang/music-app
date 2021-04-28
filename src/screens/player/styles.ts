import { StyleSheet } from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242433',
      justifyContent: 'center',
      alignItems: 'center',
    },
    controlButton: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 8,
    },
    controlText: {
      color: '#fff',
    },
    controlArea: {
      flexDirection: 'row',
      marginTop: 64,
      alignItems: 'center',
    },
    timeline: {
      textAlign: 'center',
      color: '#fff',
      marginTop: 16,
    },
    artistName: {
      textAlign: 'center',
      fontSize: 13,
      color: '#fff',
    },
    trackName: {
      textAlign: 'center',
      marginTop: 16,
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    cover: {
      width: 240,
      height: 240,
      borderRadius: 120,
    },
  });
};

export default useStyles;
