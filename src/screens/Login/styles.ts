import {StyleSheet} from 'react-native';

const makeStyle = (theme: any) =>
  StyleSheet.create({
    container: {
      marginVertical: 8,
      backgroundColor: theme.colors.white,
    },
  });

export default makeStyle;
