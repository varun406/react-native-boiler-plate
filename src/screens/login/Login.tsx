import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../redux/store';
import {setUserLogin} from '../../redux/user/userSlice';

const Login = () => {
  const dispatch = useAppDispatch();

  const login = () => {
    dispatch(setUserLogin(true));
  };

  return (
    <View>
      <Button title="Login" onPress={login} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
