import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {appImages, colors, size, WP} from '../../shared/exporter';
import LinearGradient from 'react-native-linear-gradient';
import {AppButton} from '../Button/AppButton';

const WellDoneCard = () => {
  return (
    <View>
      <LinearGradient
        colors={['#d1342f', '#8b3868', '#3a55b2']}
        style={styles.mainContainer}>
        <Image
          source={appImages.wellDone1}
          style={styles.wellImageStyle}
          resizeMode="contain"
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.headerTxtStyle}>Well Done!</Text>
          <Image source={appImages.emoji} style={styles.emojiStyle} />
        </View>
        <Text style={styles.detailsTxtStyle}>
          Now get started with your ad creative
        </Text>
      </LinearGradient>
    </View>
  );
};

export {WellDoneCard};

const styles = StyleSheet.create({
  mainContainer: {
    width: WP('90'),
    height: WP('50'),
    alignSelf: 'center',
    borderRadius: WP('3'),
    padding: WP('5'),
    marginVertical: WP('8'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTxtStyle: {
    fontSize: size.xxlarge,
    fontWeight: 'bold',
    color: colors.white,
  },
  detailsTxtStyle: {
    fontSize: size.small,
    fontWeight: '400',
    color: colors.g7,
    marginTop: WP('2'),
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
  emojiStyle: {
    width: WP('6'),
    height: WP('6'),
    borderRadius: WP('4'),
    marginHorizontal: WP('3'),
  },
  wellImageStyle: {
    width: WP('90'),
    height: WP('33'),
    borderTopRightRadius: WP('3'),
    borderTopLeftRadius: WP('3'),
  },
});
