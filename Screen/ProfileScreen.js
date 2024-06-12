import { View, Text, Image } from 'react-native';
import React from 'react';

export default function ProfileScreen() {
  return (
    <View style={{}}>
      <View style={{ backgroundColor: '#0080FF', width: '100%', height: '50%', position: 'relative' }}>
        <Text style={{ color: 'white', fontSize: 35, fontFamily: 'Outfit', padding: 20 }}>Profile</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'absolute', top: '70%', left: '33%' }}>
          <Image source={require('../assets/images/Usericon.png')} style={{}} />
        </View>
        <View style={{ position: 'absolute', top: '140%', left: '0', right: '40%' }}>
          <Text style={{ fontSize: 20, fontFamily: 'Outfit' }}>Dhanush</Text>
        </View>
      </View>

    </View>
  );
}
