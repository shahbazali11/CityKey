import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, size, WP} from '../../shared/exporter';
import LinearGradient from 'react-native-linear-gradient';
import {AppButton} from '../Button/AppButton';

interface Props {}

const AdvertisingCard: FC<Props> = () => {
  return (
    <View>
      <LinearGradient
        colors={['#d1342f', '#8b3868', '#3a55b2']}
        style={styles.mainContainer}>
        <Text style={styles.headerTxtStyle}>Welcome to CitiKey Ads!</Text>
        <Text style={styles.detailsTxtStyle}>
          Enter your promotion URL to get more visits to your website.
        </Text>
        <AppButton
          title="Get Started"
          onButtonPress={() => {}}
          buttonViewStyle={styles.buttonStyle}
          txtStyle={styles.buttonTxtStyle}
        />
      </LinearGradient>
    </View>
  );
};

export {AdvertisingCard};

const styles = StyleSheet.create({
  mainContainer: {
    width: WP('90'),
    height: WP('50'),
    alignSelf: 'center',
    borderRadius: WP('3'),
    padding: WP('5'),
    marginVertical: WP('8'),
  },
  headerTxtStyle: {
    fontSize: size.large,
    fontWeight: 'bold',
    color: colors.white,
  },
  detailsTxtStyle: {
    fontSize: size.small,
    fontWeight: '400',
    color: colors.g7,
    marginTop: WP('4'),
    width: WP('60'),
  },
  buttonStyle: {
    width: WP('35'),
    alignSelf: 'flex-start',
    marginTop: WP('3'),
  },
  buttonTxtStyle: {
    color: colors.red,
    fontSize: size.large,
  },
});
