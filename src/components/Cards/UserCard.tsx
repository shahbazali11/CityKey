import React, {FC, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {appImages, colors, size, WP} from '../../shared/exporter';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
  userImage: ImageSourcePropType;
  navigationScreen: string;
}

const UserCard: FC<Props> = ({title, userImage, navigationScreen}) => {
  const [select, setSelect] = useState(false);

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        setSelect(!select);
        navigation.navigate(navigationScreen);
      }}>
      <View style={styles.mainContainer}>
        <Image source={userImage} style={styles.imageStyle} />
        <Text style={styles.usetxtStyle}>{title}</Text>
      </View>
      {select ? (
        <View style={styles.hollowView}>
          <View style={styles.filledView}></View>
        </View>
      ) : (
        <View style={styles.hollowView}></View>
      )}
    </TouchableOpacity>
  );
};

export {UserCard};

const styles = StyleSheet.create({
  mainContainer: {
    height: WP('42'),
    width: WP('42'),
    backgroundColor: colors.light_blue_RGBA,
    borderRadius: WP('2'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: WP('25'),
    height: WP('25'),
    borderRadius: WP('4'),
  },
  usetxtStyle: {
    fontSize: size.large,
    color: colors.white,
    fontWeight: '700',
    marginTop: WP('3'),
  },
  hollowView: {
    width: WP('6'),
    height: WP('6'),
    backgroundColor: colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: WP('2'),
    borderRadius: WP('3'),
    alignItems: 'center',
  },
  filledView: {
    width: WP('3'),
    height: WP('3'),
    backgroundColor: colors.blue,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: WP('2'),
  },
});
