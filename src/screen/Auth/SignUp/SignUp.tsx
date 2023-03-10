import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {AppButton} from '../../../components';
import {appImages} from '../../../shared/exporter';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground style={styles.mainContainer} source={appImages.city}>
      <View style={styles.signupContainer}>
        <Text style={styles.signinTxt}>CREATE AN ACCOUNT</Text>
        <Text style={styles.addvertisementTxt}>
          Start your advertisement with us
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <LinearGradient
            colors={['#ac334d', '#4b4ca0', '#3a55b2']}
            style={styles.buttonViewStyle}>
            <Text style={styles.buttonTxt}>SIGN UP</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SignUp;
