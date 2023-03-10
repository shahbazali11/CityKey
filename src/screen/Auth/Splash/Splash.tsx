import React, {useEffect} from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import {appImages} from '../../../shared/exporter';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Auth');
    }, 3000);
  }, []);

  return (
    <ImageBackground source={appImages.city} style={styles.mainContainer}>
      <Text style={styles.citykeyTxt}>City Key</Text>
    </ImageBackground>
  );
};

export default Splash;
