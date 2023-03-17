import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdvertisingObjective from '../../screen/App/AdvertisingObjective/AdvertisingObjective';
import UploadeImages from '../../screen/App/UploadeImages/UploadeImages';

type RootStackParamsList = {
  AdvertisingObjective: undefined;
  UploadeImages: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const AdvertisingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdvertisingObjective"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="AdvertisingObjective"
        component={AdvertisingObjective}
      />
      <Stack.Screen name="UploadeImages" component={UploadeImages} />
    </Stack.Navigator>
  );
};

export default AdvertisingStack;
