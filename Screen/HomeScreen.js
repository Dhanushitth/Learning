import { View, Text } from 'react-native'
import React from 'react';
import Header from '../component/HomeScreen/Header';
import CourseList from '../component/HomeScreen/CourseList';

export default function HomeScreen() {
  return (
    <View>
      <View style={{ backgroundColor: '#0080FF', height: 250, padding: 20 }}>
        <Header />
      </View>
      <View style={{ padding: 20 }}>
        <View style={{marginTop:-90}}>
        <CourseList level={'Basic'} /> 
        </View>
        <CourseList level={'Advance'} />
      </View>
    </View>
  )
}