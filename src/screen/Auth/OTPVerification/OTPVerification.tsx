import React, {useRef, useEffect, useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {appImages, OTP, OTPVS} from '../../../shared/exporter';
import styles from './styles';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppInput, AppButton} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

interface Props {
  route: any;
}

const OTPVerification: React.FC<Props> = ({route}) => {
  const formikRef = useRef();
  const navigation = useNavigation();

  const {confirm} = route.params;
  console.log('route', confirm);

  const onAuthStateChanged = (user: any) => {
    console.log('user:', user);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const handleOTPVerification = async (values: any) => {
    try {
      const response = await confirm.confirm(values.otp);
      console.log('Response:', response);

      navigation.navigate('Login');
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        source={appImages.recoverPass}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <KeyboardAwareScrollView style={styles.signupContainer}>
        <Text style={styles.signinTxt}>RECORVER YOUR PASSWORD</Text>
        <Text style={styles.addvertisementTxt}>Enter your valid OTP</Text>
        <Formik
          innerRef={formikRef}
          initialValues={OTP}
          validationSchema={OTPVS}
          onSubmit={values => {
            handleOTPVerification(values);
          }}>
          {({values, errors, handleSubmit, handleChange}) => (
            <View>
              <AppInput
                value={values.otp}
                placeholder={'Enter Valid OTP'}
                onChangeText={handleChange('otp')}
                keyboardType={'phone-pad'}
              />
              <AppButton
                title="Continue"
                txtStyle={styles.buttonTxtStyle}
                onButtonPress={handleSubmit}
                withLinear
                buttonViewStyle={styles.buttonContainer}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default OTPVerification;
