import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screen/Auth/Splash/Splash';
import AuthStack from './stacks/AuthStack';
import AdvertisingStack from './stacks/AdvertisingStack';

export type RootStackParamsList = {
  Splash: undefined;
  Auth: undefined;
  Advertising: undefined;
};

const AppStack = createNativeStackNavigator<RootStackParamsList>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Splash" component={Splash} />
        <AppStack.Screen name="Auth" component={AuthStack} />
        <AppStack.Screen name="Advertising" component={AdvertisingStack} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
