import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContinueAs from '../../screen/Auth/ContinueAs/ContinueAs';
import SignUp from '../../screen/Auth/SignUp/SignUp';
import Login from '../../screen/Auth/Login/Login';
import Welcome from '../../screen/Auth/Welcome/Welcome';
import RecoverPassword from '../../screen/Auth/RecoverPassword/RecoverPassword';
import OTPVerification from '../../screen/Auth/OTPVerification/OTPVerification';

type RootStackParamsList = {
  ContinueAs: undefined;
  SignUp: undefined;
  Login: undefined;
  Welcome: undefined;
  RecoverPassword: undefined;
  OTPVerification: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamsList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ContinueAs"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ContinueAs" component={ContinueAs} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
    </Stack.Navigator>
  );
};

export default AuthStack;
