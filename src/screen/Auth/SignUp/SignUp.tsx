import React, {useRef} from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {AppButton, AppInput} from '../../../components';
import {appImages, signup, signupVS} from '../../../shared/exporter';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SignUp = () => {
  const navigation = useNavigation();
  const formikRef = useRef();

  const handleSignup = (values: any) => {};

  return (
    <ImageBackground style={styles.mainContainer} source={appImages.city}>
      <KeyboardAwareScrollView style={styles.signupContainer}>
        <Text style={styles.signinTxt}>CREATE AN ACCOUNT</Text>
        <Text style={styles.addvertisementTxt}>
          Start your advertisement with us
        </Text>
        <Formik
          innerRef={formikRef}
          initialValues={signup}
          validationSchema={signupVS}
          onSubmit={values => {
            handleSignup(values);
          }}>
          {({values, errors, handleSubmit, handleChange}) => (
            <View>
              <AppInput
                value={values.name}
                placeholder={'Full Name'}
                onChangeText={handleChange('name')}
              />
              <AppInput
                value={values.email}
                placeholder={'Email Address'}
                onChangeText={handleChange('email')}
              />
              <AppInput
                value={values.phone}
                placeholder={'Mobile Number'}
                onChangeText={handleChange('phone')}
                keyboardType={'phone-pad'}
              />
              <AppInput
                value={values.password}
                placeholder={'Password'}
                onChangeText={handleChange('password')}
              />
              <AppInput
                value={values.confirmPassword}
                placeholder={'Confirm Password'}
                onChangeText={handleChange('confirmPassword')}
              />
              <AppButton
                title="SIGN UP"
                onButtonPress={() => {
                  navigation.navigate('Login');
                }}
                withLinear
                txtStyle={styles.buttonTxt}
                buttonViewStyle={styles.buttonViewStyle}
              />
              <TouchableOpacity
                style={styles.signinTxtContainer}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={styles.signinText}>Already have an account? </Text>
                <Text style={styles.signinTxtBold}>SIGN IN </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default SignUp;
