import { StyleSheet } from 'react-native';

const useStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#16161e',
    },
    main: {
      paddingHorizontal: 16,
      flex: 1,
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
  });

export default useStyle;
