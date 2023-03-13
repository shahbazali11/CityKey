import React, {FC} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, size, WP} from '../../shared/exporter';

import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title: string;
  onButtonPress: () => void;
  buttonViewStyle?: StyleProp;
  txtStyle?: StyleProp;
  withLinear?: boolean;
}

const AppButton: FC<Props> = ({
  title,
  onButtonPress,
  buttonViewStyle,
  txtStyle,
  withLinear = false,
}) => {
  return (
    <View>
      {withLinear ? (
        <TouchableOpacity onPress={onButtonPress}>
          <LinearGradient
            colors={['#ac334d', '#4b4ca0', '#3a55b2']}
            style={[styles.mainContainer, {...buttonViewStyle}]}>
            <Text style={[styles.buttonTxt, {...txtStyle}]}>{title}</Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.mainContainer, {...buttonViewStyle}]}
          onPress={onButtonPress}>
          <Text style={[styles.buttonTxt, {...txtStyle}]}>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
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
  },
  buttonTxt: {
    fontSize: size.h6,
    fontWeight: '700',
    color: colors.purple,
  },
});
