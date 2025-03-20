import {StyleSheet} from 'react-native';

export default (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: theme.backgroundColor,
    },
    countContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
    },
  });
