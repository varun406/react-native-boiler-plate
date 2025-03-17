import {StyleSheet} from 'react-native';
import {useTheme} from '../context/ThemeProvider';

export const useThemedStyles = (stylesFn: (theme: any) => any) => {
  const {theme, ...otherDetails} = useTheme();
  const styles = stylesFn(theme);

  return {styles, ...otherDetails};
};
