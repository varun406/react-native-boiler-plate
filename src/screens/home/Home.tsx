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
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import screenName from '../../constants/screenName';
import style from './styles';
import {useThemedStyles} from '../../hooks/useThemeStyles';

const Home = ({navigation}) => {
  const styles = useThemedStyles(style);
  const dispatch = useAppDispatch();
  const {value} = useAppSelector(state => state.counter);
  const {username} = useAppSelector(state => state.user);

  const count = (inc = true) => {
    if (!inc) {
      dispatch(decrement());
      return;
    }

    dispatch(increment());
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
    </View>
  );
};

export default Home;
