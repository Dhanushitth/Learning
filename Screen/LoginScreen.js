import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hook/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{display:'flex',alignItems:'center'}}>
      <Image  
style={{width:250,height:500,
  objectFit:'contain',marginTop:50
}}source={require('../assets/images/home.png')}/>
<View 
style={{height:500,
width:'100%',
backgroundColor:'#6857E8',
marginTop:-50,
padding:20,
}}>
<Text style={{fontSize:35,textAlign:'center',color:'white', fontFamily:'Outfit', marginTop:20}}>CodeBox</Text>
<Text style={{textAlign:'center', color:'#C2BAFF',fontSize:25}}>Your Ultimate Programming 
Learning Box</Text>
<TouchableOpacity 
onPress={onPress}
style={{backgroundColor:'white',borderRadius:99,alignItems:'center',gap:10, display:'flex',flexDirection:'row',justifyContent:'center', padding:10,
  marginTop:25,width:275,marginLeft:25,
}}>

<Image style={{height:40,width:40}} source={require('../assets/images/go.png')}/>
<Text style={{fontSize:20,color:'#6857E8',textAlign:'center',height:29,fontFamily:'Outfit-regular', }}>Sign in with Google</Text>
</TouchableOpacity>
</View>
    </View>
  )
}
