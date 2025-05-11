import {StyleSheet} from 'react-native';

const style = (theme: any) =>
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

export default style as typeof style;
