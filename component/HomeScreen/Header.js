import { View, Text,StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons';
//import { isLoaded } from 'expo-font';
export default function Header() {
    const{isLoaded,isSignedIn,user}=useUser();
  return isLoaded&&(
    <View style={{}}>
    <View style={[{justifyContent:'space-between'},styles.rowStyle]}>
        <View style={styles.rowStyle}>
            <Image source={{uri:user?.imageUrl}}
            style={{width:50,height:50,borderRadius:99}}/>
            <View>
              <Text style={{color:'#FFFFFF',fontFamily:'Outfit',fontSize:15}}>Welcome,</Text>
              <Text style={styles.mainHeader}>{user?.fullName}</Text>
            </View>
        </View>
        <View style={styles.rowStyle}>
          <Image source={require('../../assets/images/Coin.png')} style={{width:35,height:35}}/>
          <Text style={styles.mainHeader}>3500</Text>
          
        </View>
    </View>
    <View style={{backgroundColor:'white',display:'flex',flexDirection:'row',paddingLeft:20,justifyContent:'space-between',borderRadius:99,
      paddingRight:5,marginTop:25
    }}>
      <TextInput placeholder='Search Course' style={{fontFamily:'Outfit-regular',fontSize:20}}/>
      <Ionicons name="search-circle" size={50} color="#65CFF2" />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
mainHeader:{
  color:'#FFFFFF',
  fontFamily:'Outfit-regular',
  fontSize:20
},
rowStyle:{
  display:'flex',
  flexDirection:'row',
  gap:10,
  alignItems:'center'
}

})