import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {useAppDispatch} from '../redux/store';
import {setUserLogin} from '../redux/user/userSlice';
import {useIsFocused} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigators/types';
import screenName from '../constants/screenName';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const isFocused = useIsFocused();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isFocused) {
      props?.navigation?.closeDrawer();
    }
  }, [isFocused]);

  const logout = () => {
    dispatch(setUserLogin(false));
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1, padding: 20}}>
          <DrawerItemList {...props} />
        </View>
        <View style={{marginTop: 'auto'}}>
          <Button title="Logout" onPress={logout} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
