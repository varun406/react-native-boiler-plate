// toastHelper.ts
import Toast from 'react-native-toast-message';

const show = (
  type: 'success' | 'error' | 'info',
  title: string,
  description?: string,
  onPress?: () => void,
) => {
  Toast.show({
    type,
    text1: title,
    text2: description,
    position: 'top',
    visibilityTime: 5000,
    autoHide: true,
    topOffset: 40,
    bottomOffset: 40,
    onPress: onPress,
  });
};

const toast = {
  success: (title: string, description?: string, onPress?: () => void) =>
    show('success', title, description, onPress),
  error: (title: string, description?: string, onPress?: () => void) =>
    show('error', title, description, onPress),
  info: (title: string, description?: string, onPress?: () => void) =>
    show('info', title, description, onPress),
};

export default toast;
