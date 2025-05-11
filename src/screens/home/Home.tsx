import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Config from 'react-native-config';
import {store, useAppDispatch, useAppSelector} from '../../redux/store';
import {decrement, increment} from '../../redux/counter/counterSlice';
import {addUsername} from '../../redux/user/userSlice';
import style from './styles';
import {useThemedStyles} from '../../hooks/useThemeStyles';
import toast from '../../helpers/toastHelper';
import {navigate} from '../../helpers/navigationHelper';
import screenName from '../../constants/screenName';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/types';

const Home = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, typeof screenName.Home>) => {
  const {styles} = useThemedStyles(style);
  const dispatch = useAppDispatch();
  const {value} = useAppSelector(state => state.counter);
  const {username} = useAppSelector(state => state.user);

  const count = (inc = true) => {
    if (!inc) {
      dispatch(decrement());
      return;
    }

    dispatch(increment());
    toast.success('Count incremented', 'you pressed increment');
  };

  return (
    <View style={styles.container}>
      {username && (
        <Text style={{textAlign: 'center', fontSize: 24, fontWeight: '600'}}>
          Welcome {username}
        </Text>
      )}
      <Text style={{textAlign: 'center', fontSize: 24}}>
        Env {Config.BASE_URL}
      </Text>
      <View style={styles.countContainer}>
        <Button title="+" onPress={() => count()} />
        <Text style={{textAlign: 'center', fontSize: 24}}>{value}</Text>
        <Button title="-" onPress={() => count(false)} />
      </View>

      <Button
        title="Gallery"
        onPress={() => {
          navigation.navigate(screenName.Gallery);
        }}
      />

      <Button
        title="Settings"
        onPress={() => {
          navigation.navigate(screenName.Settings);
        }}
      />

      <Button
        title="Drawer"
        onPress={() => {
          navigation?.openDrawer();
        }}
      />
    </View>
  );
};

export default Home;
