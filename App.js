import * as React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from './src/components/tab-bar';
import DetailScreen from './src/screens/DetailScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/Auth/LogInScreen';
import SigninScreen from './src/screens/Auth/SignInScreen';
import PersonelScreen from './src/screens/PersonelScreen';
import PermissionScreen from './src/screens/PermissionScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import CalenderScreen from './src/screens/CalenderScreen';
import PersonelForm from './src/components/PersonelComponents/PersonelForm';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SigninScreen" component={SigninScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}


const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='MainScreen' tabBar={props => <TabBar {...props} />} >

      <Tab.Screen name="settings" component={SettingsScreen}
        options={() => {
          return {
            headerShown: false
          }
        }} />
      <Tab.Screen name="MainScreen" component={MainScreen}
        options={() => {
          return {
            headerShown: false
          }
        }}
      />
      <Tab.Screen name="profile" component={ProfileScreen}
        options={() => {
          return {
            headerShown: false
          }
        }}
      />

    </Tab.Navigator>
  )
}

export default function App() {
  return (
  <SafeAreaView flex={1}>
    <NavigationContainer >
      <Stack.Navigator>
        {/* <Stack.Screen name="auth" component={AuthStack} options={{ headerShown: false }} /> */}

        <Stack.Screen name="home" component={TabNavigator} options={{ headerShown: false }}  />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PersonelScreen" component={PersonelScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PermissionScreen" component={PermissionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ActivityScreen" component={ActivityScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CalenderScreen" component={CalenderScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PersonelForm" component={PersonelForm} options={{ headerShown: false }} />
        <Stack.Screen name="detail" component={DetailScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      {/* <FlashMessage position="top" /> */}
    </NavigationContainer>
    </SafeAreaView>
   

  );
}


