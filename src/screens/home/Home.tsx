import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import toast from '../../helpers/toastHelper';
import {navigate} from '../../helpers/navigationHelper';
import screenName from '../../constants/screenName';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 24}}>
        Varun {Config.BASE_URL}
      </Text>
      <Button
        title="Save"
        onPress={() => {
          toast.success('Hello, Im there!', 'qweqweqw qwdqeqwe dsads');
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
