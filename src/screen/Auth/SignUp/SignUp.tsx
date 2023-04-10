import React, {useRef} from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {AppButton, AppInput} from '../../../components';
import {appImages, signUp, signupVS} from '../../../shared/exporter';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAppSelector} from '../../../redux/store';
import {signup} from '../../../redux/features/authSlice';
import {useCreatePostMutation} from '../../../redux/api/postApi';

const SignUp = () => {
  const navigation = useNavigation();
  const formikRef = useRef();

  const [createPost, res] = useCreatePostMutation();
  const {userInfo} = useAppSelector(state => state.authSlice);

  const handleSignup = (values: any) => {
    const url = 'http://192.168.11.35:4500/signup';
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      phone: values.phone,
    };
    console.log('Data: ', data);
    //console.log('Signup Data: ', userInfo);

    //createPost(data);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    // send the request
    fetch(url, options)
      .then(response => {
        if (response.ok) {
          // handle successful response
          return response.json();
        } else {
          // handle error response
          throw new Error('Failed to signup.');
        }
      })
      .then(data => {
        // handle response data
        console.log(data);
        navigation.navigate('Login');
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  };

  return (
    <ImageBackground style={styles.mainContainer} source={appImages.city}>
      <KeyboardAwareScrollView style={styles.signupContainer}>
        <Text style={styles.signinTxt}>CREATE AN ACCOUNT</Text>
        <Text style={styles.addvertisementTxt}>
          Start your advertisement with us
        </Text>
        <Formik
          innerRef={formikRef}
          initialValues={signUp}
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
                onButtonPress={handleSubmit}
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
