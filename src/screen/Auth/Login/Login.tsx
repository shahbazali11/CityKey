import React, {useRef} from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import {AppButton, AppInput} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {appImages, login, loginVS} from '../../../shared/exporter';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  const navigation = useNavigation();
  const formikRef = useRef();

  const handleSignup = (values: any) => {};

  return (
    <ImageBackground style={styles.mainContainer} source={appImages.city}>
      <KeyboardAwareScrollView style={styles.signupContainer}>
        <Text style={styles.signinTxt}>SIGN IN</Text>
        <Text style={styles.addvertisementTxt}>
          Start your advertisement with us
        </Text>
        <Formik
          innerRef={formikRef}
          initialValues={login}
          validationSchema={loginVS}
          onSubmit={values => {
            handleSignup(values);
          }}>
          {({values, errors, handleSubmit, handleChange}) => (
            <View>
              <AppInput
                value={values.email}
                placeholder={'Email Address'}
                onChangeText={handleChange('email')}
              />
              <AppInput
                value={values.password}
                placeholder={'Password'}
                onChangeText={handleChange('password')}
              />
              <TouchableOpacity
                style={styles.signinTxtContainer}
                onPress={() => {
                  navigation.navigate('RecoverPassword');
                }}>
                <Text style={styles.signinTxtBold}>Forget Password?</Text>
              </TouchableOpacity>
              <AppButton
                title="SIGN IN"
                txtStyle={styles.buttonTxtStyle}
                onButtonPress={() => {
                  navigation.navigate('AdvertisingObjective');
                }}
                buttonViewStyle={styles.buttonContainer}
              />
              <TouchableOpacity
                style={styles.signinTxtContainer}
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <Text style={styles.signinText}>Don't have an account? </Text>
                <Text style={styles.signinTxtBold}>SIGN UP </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Login;
