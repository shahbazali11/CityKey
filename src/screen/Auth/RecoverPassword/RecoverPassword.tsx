import React, {useRef} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {appImages, recover, recoverVS} from '../../../shared/exporter';
import styles from './styles';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppInput, AppButton} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const RecoverPassword = () => {
  const formikRef = useRef();
  const navigation = useNavigation();

  const handlePhoneVerification = async (values: any) => {
    const mobileNumber = '+92' + values.phone;
    const confirmation = await auth().signInWithPhoneNumber(mobileNumber);
    console.log('Confirmation: ', confirmation);
    navigation.navigate('OTPVerification', {
      confirm: confirmation,
      mobileNumber: mobileNumber,
    });
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
        <Text style={styles.addvertisementTxt}>Enter your Mobile Number</Text>
        <Formik
          innerRef={formikRef}
          initialValues={recover}
          validationSchema={recoverVS}
          onSubmit={values => {
            handlePhoneVerification(values);
          }}>
          {({values, errors, handleSubmit, handleChange}) => (
            <View>
              <AppInput
                value={values.phone}
                placeholder={'Enter Your Mobile Number'}
                onChangeText={handleChange('phone')}
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

export default RecoverPassword;
