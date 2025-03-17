import React, {createContext, useContext, useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import theme from './theme';

const {light, dark} = theme;

export type ThemeType = typeof light;
export type ThemeName = keyof typeof theme | 'system'; // ✅ Add "system"

interface ThemeContextType {
  theme: ThemeType;
  changeTheme: (themeName: ThemeName) => void;
  themeName: ThemeName;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: light,
  changeTheme: () => {},
  themeName: 'light',
});

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const systemTheme = useColorScheme(); // ✅ Detect system theme
  const [currentTheme, setCurrentTheme] = useState<{
    name: ThemeName;
    style: ThemeType;
  }>({
    name: 'system',
    style: systemTheme === 'dark' ? dark : light, // ✅ Default to system
  });

  useEffect(() => {
    if (currentTheme.name === 'system') {
      setCurrentTheme(prev => ({
        ...prev,
        style: systemTheme === 'dark' ? dark : light, // ✅ Update on system change
      }));
    }
  }, [systemTheme]);

  const changeTheme = (themeName: ThemeName) => {
    setCurrentTheme({
      name: themeName,
      style:
        themeName === 'system'
          ? systemTheme === 'dark'
            ? dark
            : light
          : theme[themeName],
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme.style,
        themeName: currentTheme.name,
        changeTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ✅ Custom Hook
export const useTheme = () => useContext(ThemeContext);
