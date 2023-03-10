import React, {FC} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {colors, size, WP} from '../../shared/exporter';

interface Props {
  title: string;
  onButtonPress: () => void;
  buttonViewStyle?: StyleProp;
  txtStyle?: StyleProp;
}

const AppButton: FC<Props> = ({
  title,
  onButtonPress,
  buttonViewStyle,
  txtStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, {...buttonViewStyle}]}
      onPress={onButtonPress}>
      <Text style={[styles.buttonTxt, {...txtStyle}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export {AppButton};

const styles = StyleSheet.create({
  mainContainer: {
    width: WP('90'),
    paddingVertical: WP('3'),
    backgroundColor: colors.white,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: WP('10'),
    marginTop: WP('80'),
  },
  buttonTxt: {
    fontSize: size.h6,
    fontWeight: '700',
    color: colors.purple,
  },
});
