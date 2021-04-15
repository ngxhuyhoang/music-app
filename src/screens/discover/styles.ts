import { StyleSheet } from 'react-native';

const useStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    main: {
      paddingHorizontal: 16,
      flex: 1,
    },
  });

export default useStyle;
