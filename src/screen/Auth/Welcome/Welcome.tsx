import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {AppButton} from '../../../components';
import {appImages, WP} from '../../../shared/exporter';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={appImages.city} style={styles.mainContainer}>
      <Text style={styles.welcomeTxt}>WELCOME TO</Text>
      <Text style={styles.welcomeTxtBold}>CITYKEY</Text>
      <AppButton
        title="GET STARTED"
        onButtonPress={() => {
          navigation.navigate('SignUp');
        }}
        buttonViewStyle={{
          marginTop: WP('80'),
        }}
      />
      <TouchableOpacity
        style={styles.signinTxtContainer}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.signinTxt}>Already have an account? </Text>
        <Text style={styles.signinTxtBold}>SIGN IN </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Welcome;
