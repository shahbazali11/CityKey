import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {AdvertisingCard, AppButton, AppHeader} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {appImages, colors, WP} from '../../../shared/exporter';

const AdvertisingObjective = () => {
  const navigation = useNavigation();
  const [state, setState] = useState(0);

  return (
    <View style={styles.mainCotainer}>
      <AppHeader
        headerTitle="Advertising Objective"
        onBackPress={() => {
          navigation.goBack();
        }}
        rightTxt="Exit"
        onRightPress={() => {
          navigation.navigate('Login');
        }}
      />
      <View style={styles.sliderContainer}>
        <View
          style={[styles.activePaginationDots, {backgroundColor: colors.red}]}>
          <View style={styles.innerView}></View>
        </View>
        <View
          style={[styles.paginationDots, {backgroundColor: colors.red}]}></View>
        <View style={styles.activePaginationDots}>
          <View style={styles.innerView}></View>
        </View>
        <View style={styles.paginationDots}></View>
        <View style={styles.activePaginationDots}>
          <View style={styles.innerView}></View>
        </View>
      </View>
      <AdvertisingCard />
      <View style={styles.linkContainer}>
        <Image
          source={appImages.windowWorld}
          style={styles.worldImageStyle}
          resizeMode="contain"
        />
        <View style={{marginLeft: WP('4')}}>
          <Text style={styles.linkHeadingTxtStyle}>
            Get More Website Traffic
          </Text>
          <TouchableOpacity>
            <Text>https://citikey.com.au/</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.noteTxtStyle}>
        Note: The following objectives are supported in the desktop version
        only: Reach, Video Views, App Installs, Conversions.
      </Text>
      <AppButton
        withLinear
        title="NEXT"
        txtStyle={styles.buttonTxtStyle}
        buttonViewStyle={styles.nextButtonStyle}
        onButtonPress={() => {
          navigation.navigate('UploadeImages');
        }}
      />
    </View>
  );
};

export default AdvertisingObjective;
