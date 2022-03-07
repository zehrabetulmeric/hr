// import * as React from 'react';
// import { Button, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// /* import MainScreen from './src/screens/MainScreen'; */

// import DetailScreen from './src/screens/DetailScreen';
// import SettingsScreen from './src/screens/SettingsScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import SignInScreen from './src/screens/EntryScreens/SignInScreen';



// const MainStack = createNativeStackNavigator();

// function MainStackScreen() {
//   return (
//     <MainStack.Navigator screenOptions={{ headerShown: false }}>
//       <MainStack.Screen name="Main" component={SignInScreen} />
//       <MainStack.Screen name="Details" component={DetailScreen} />
//     </MainStack.Navigator>
//   );
// }

// const SettingsStack = createNativeStackNavigator();

// function SettingsStackScreen() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="Setting" component={SettingsScreen} />
      
//     </SettingsStack.Navigator>
//   );
// }

// const ProfileStack = createNativeStackNavigator();

// function ProfileStackScreen() {
//   return (
//     <ProfileStack.Navigator>
//       <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      
//     </ProfileStack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{ headerShown: false }}>
//         <Tab.Screen name="Settings" component={SettingsStackScreen} />
//         <Tab.Screen name="Main" component={MainStackScreen} />
//         <Tab.Screen name="Profile" component={ProfileStackScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );


  // useEffect(() => {
  //   const isLoggedIn= false;
  //   if(!isLoggedIn) {
  //     navigation.navigate('signin')
  //   }
  // }, [])
// }

import React from 'react'
import { View, Text } from 'react-native'

const PermissionScreen = () => {
    return (
        <View>
            <Text>Permission Screen</Text>
        </View>
    )
}

export default PermissionScreen;