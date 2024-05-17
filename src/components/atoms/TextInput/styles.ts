import {StyleSheet} from 'react-native';

const makeStyle = (theme: any) =>
  StyleSheet.create({
    container: {
      marginVertical: 8,
      backgroundColor: theme.colors.white,
    },
    label: {
      marginBottom: 4,
      color: '#333',
      fontSize: 16,
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.borderLightGray,
      borderRadius: 4,
      padding: 10,
      fontSize: 16,
      color: '#333',
      backgroundColor: theme.colors.lightGray,
    },
    error: {
      marginTop: 4,
      color: 'red',
      fontSize: 14,
    },
  });

export default makeStyle;
