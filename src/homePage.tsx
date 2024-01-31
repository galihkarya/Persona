import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

const HomePage = ({}) => {
  return (
    <View>
      <View style={{marginRight: 10, marginTop: 20}}>
        <TouchableOpacity style={Styles.loginButton}>
          <Text style={Styles.loginText}>Login</Text>
          <Image
            style={Styles.avatar}
            source={require('../assets/icons/Avatar.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        <TouchableOpacity style={Styles.card}>
          <Image
            style={Styles.imageObjects}
            source={require('../assets/icons/palm_fluent.png')}
          />
          <Text style={Styles.textCard}>Apa itu Palmistry?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.card}>
          <Image
            style={Styles.imageObjects}
            source={require('../assets/icons/palmline.png')}
          />
          <Text style={Styles.textCard}>Macam-macam Garis Tangan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.card}>
          <Image
            style={Styles.imageObjects}
            source={require('../assets/icons/indexfinger_fluent.png')}
          />
          <Text style={Styles.textCard}>
            Gaya belajar yang cocok sesuai kepribadian anak!
          </Text>
        </TouchableOpacity>
      </View>
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
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 12,
    elevation: 8,
  },
  imageObjects: {
    width: 100,
    height: 100,
    margin: 16,
  },
  textCard: {
    fontSize: 18,
    fontWeight: '900',
    color: '#000000',
    alignSelf: 'center',
    marginRight: 200,
  },
});

export default HomePage;
