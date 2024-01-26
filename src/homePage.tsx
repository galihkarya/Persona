import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{marginRight: 10, marginTop: 20}}>
        <TouchableOpacity style={Styles.loginButton}>
          <Text style={Styles.loginText}>Login</Text>
          <Image style={Styles.avatar} source={require('../assets/icons/Avatar.png')} />
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
    backgroundColor: '#00000000',
    flexDirection: 'row',
  },
  loginText: {
    marginRight: 10,
    fontSize: 14,
    fontWeight: '900',
    color: '#000000',
    alignSelf: 'center',
  },
  avatar: {
    width: 40, 
    height: 40,
  },
});

export default App;
