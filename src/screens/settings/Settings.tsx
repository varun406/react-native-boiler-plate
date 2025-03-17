import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useThemedStyles} from '../../hooks/useThemeStyles';
import style from './style';
import {ThemeName, useTheme} from '../../context/ThemeProvider';

const Settings = () => {
  const {styles, changeTheme, themeName} = useThemedStyles(style);

  const isSelected = useCallback(
    (name: ThemeName) => {
      return themeName === name;
    },
    [themeName],
  );

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => changeTheme('light')}
          style={styles.sectionContainer}>
          <Text style={styles.text}>Light</Text>
          <View style={styles.radioButton}>
            <View style={isSelected('light') ? styles.selectedBtn : {}} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeTheme('dark')}
          style={styles.sectionContainer}>
          <Text style={styles.text}>Dark</Text>
          <View style={styles.radioButton}>
            <View style={isSelected('dark') ? styles.selectedBtn : {}} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeTheme('system')}
          style={styles.sectionContainer}>
          <Text style={styles.text}>System</Text>
          <View style={styles.radioButton}>
            <View style={isSelected('system') ? styles.selectedBtn : {}} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
