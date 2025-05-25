import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../redux/store';
import {setUserLogin} from '../../redux/user/userSlice';
import FONTFAMILIES from '../../utils/fontfamily';
import COLORS from '../../utils/colors';

const Login = () => {
  const dispatch = useAppDispatch();

  const login = () => {
    dispatch(setUserLogin(true));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={login} style={styles.loginBtn}>
        <Text style={styles.loginBtnText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  loginBtn: {
    width: '100%',
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginBtnText: {
    fontFamily: FONTFAMILIES.POPPINS.SEMI_BOLD,
    color: COLORS.WHITE,
    textAlign: 'center',
  },
});
