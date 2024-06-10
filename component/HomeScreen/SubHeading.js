import { View, Text } from 'react-native'
import React from 'react'

export default function SubHeading({text,color='black'}) {
  return (
    <View>
         <Text 
      style={{fontFamily:'Outfit'
      ,fontSize:25,
      color:color}}>{text}</Text>
    </View>
  )
}