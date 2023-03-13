import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {AppHeader} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {WP} from '../../../shared/exporter';

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    backgroundColor: '#22bcb5',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    backgroundColor: '#22bcb5',
  },
];

const AdvertisingObjective = () => {
  const navigation = useNavigation();

  const renderSliderItem = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: WP('5'),
        }}>
        {/* <View style={styles.activePaginationDots}>
          <View style={styles.innerView}></View>
        </View>
        <View style={styles.paginationDots}></View>
        <View style={styles.activePaginationDots}>
          <View style={styles.innerView}></View>
        </View>
        <View style={styles.paginationDots}></View>
        <View style={styles.activePaginationDots}>
          <View style={styles.innerView}></View>
        </View> */}
      </View>
    );
  };
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
      <AppIntroSlider
        data={slides}
        scrollEnabled={false}
        renderItem={renderSliderItem}
        activeDotStyle={styles.activePaginationDots}
        dotStyle={styles.paginationDots}
      />
    </View>
  );
};

export default AdvertisingObjective;
