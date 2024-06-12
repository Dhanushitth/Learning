import { View } from 'react-native'
import React from 'react';
import Header from '../component/HomeScreen/Header';

export default function MyCourse() {
  return (
    <View>
      <View style={{backgroundColor:'#0080FF',height:250,padding:20}}>
        <Header/>
      </View>
    </View>
  )
}