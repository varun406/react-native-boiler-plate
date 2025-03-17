import Config from 'react-native-config';

const log = (message: string, type: 'info' | 'error' | 'warn' = 'info') => {
  if (Config.ENV !== 'prod') {
    // This will only run in development mode
    switch (type) {
      case 'error':
        console.error(message);
        break;
      case 'warn':
        console.warn(message);
        break;
      case 'info':
      default:
        console.log(message);
        break;
    }
  }
};

export default log;
