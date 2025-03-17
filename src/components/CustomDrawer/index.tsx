import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useAppDispatch} from '../../redux/store';
import {setUserLogin} from '../../redux/user/userSlice';

const CustomDrawer = props => {
  const dispatch = useAppDispatch();

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
