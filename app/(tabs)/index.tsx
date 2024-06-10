import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from '../../Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from '../../Navigation/TabNavigation'; 
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens();


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Outfit': require('../../assets/fonts/Outfit-Bold.ttf'),
    'Outfit-regular': require('../../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-medium': require('../../assets/fonts/Outfit-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (

    <ClerkProvider publishableKey={"pk_test_aHVnZS1weXRob24tOS5jbGVyay5hY2NvdW50cy5kZXYk"}>
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer independent={true}>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>

      </View>
    </ClerkProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20

  },
});
