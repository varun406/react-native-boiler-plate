import {StyleSheet} from 'react-native';
import {ThemeType} from '../../context/ThemeProvider';

export default (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignContent: 'center',
      backgroundColor: theme.background,
      padding: 15,
    },
    sectionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
    },
    radioButton: {
      borderWidth: 2,
      borderRadius: 20,
      width: 20,
      height: 20,
      padding: 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    selectedBtn: {
      width: '100%',
      height: '100%',
      borderWidth: 2,
      borderRadius: 20,
      backgroundColor: theme.text,
    },
    text: {
      color: theme.text,
    },
  });
