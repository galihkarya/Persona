import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{marginRight: 20, marginTop: 30,}}>
        <TouchableOpacity style={Styles.loginButton}>
          <Text style={{fontSize: 14, fontWeight: '900',}}>Login</Text>

        </TouchableOpacity>
      </View>

      <View></View>
    </View>
  );
};

const Styles = StyleSheet.create({
  loginButton: {
    padding: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#0000000',
  },
});

export default App;
