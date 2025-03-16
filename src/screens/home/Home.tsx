import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Config from 'react-native-config';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 24}}>
        Varun {Config.BASE_URL}
      </Text>
      <Button title="Save" />
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
