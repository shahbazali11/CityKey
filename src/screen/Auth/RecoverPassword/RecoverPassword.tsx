import React, {useRef} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {appImages, recover, recoverVS} from '../../../shared/exporter';
import styles from './styles';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppInput, AppButton} from '../../../components';
import {useNavigation} from '@react-navigation/native';

const RecoverPassword = () => {
  const formikRef = useRef();
  const navigation = useNavigation();
  const handleSignup = (values: any) => {};

  return (
    <View style={styles.mainContainer}>
      <Image
        source={appImages.recoverPass}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <KeyboardAwareScrollView style={styles.signupContainer}>
        <Text style={styles.signinTxt}>RECORVER YOUR PASSWORD</Text>
        <Text style={styles.addvertisementTxt}>
          Enter your email address associated with your
        </Text>
        <Formik
          innerRef={formikRef}
          initialValues={recover}
          validationSchema={recoverVS}
          onSubmit={values => {
            handleSignup(values);
          }}>
          {({values, errors, handleSubmit, handleChange}) => (
            <View>
              <AppInput
                value={values.email}
                placeholder={'Enter Your Email'}
                onChangeText={handleChange('email')}
              />
              <AppButton
                title="Continue"
                txtStyle={styles.buttonTxtStyle}
                onButtonPress={() => {
                  navigation.navigate('SignUp');
                }}
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
