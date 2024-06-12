// import React from "react";
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Header from '../component/HomeScreen/Header';
// import {HomeScreen} from '../Screen/HomeScreen';
// import {CourseDetailScreen} from '../Screen/CourseDetailScreen';
// import { View } from "react-native";




// const Stack =createNativeStackNavigator ();

// export const MyHomeStack =() =>(
//     <Stack.Navigator screenOptions={{orientation: 'portrait_up'}}>
//        <Stack.Screen  options ={{header:(props)=><Header {...props}/>}}component={HomeScreen} name="Home"/>
//        <Stack.Screen  options ={{header:(props)=><Header drawerShow={true} {...props}/>}}component={CourseDetailScreen} name="course-detail"/>
//     </Stack.Navigator>
// );


// <Drawer.Screen
// name="MyHome"
// component={MyHomeStack}
// options={{
//     headerShown:false,
//     title:'Home',
//     drawerLabelStyle:{fontFamily:'Outfit',fontSize:16},
//     drawerIcon:({ focused }) =>(
//         <View style={{width:21,alignItem:'center',justifyContent:'center'}}>
// {focused ? <MyHomeActivity/>:<MyHome/>}
//         </View>
//     ),
//     unmountOnBlur:true
// }}

// />
// export default  MyHomeStack;