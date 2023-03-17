import React, {FC} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, size, WP} from '../../shared/exporter';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

interface Props {
  image?: string;
  type?: string;
  title: string;
}

const CircleView: FC<Props> = ({image, type, title}) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <LinearGradient
        colors={['#cb322c', '#963359', '#614187']}
        style={styles.firstContainer}>
        <View style={styles.interContainer}>
          <View style={styles.innerContainer}>
            {image ? (
              <Icon
                name={image}
                style={styles.imageStyle}
                type={type}
                color={colors.white}
              />
            ) : (
              ''
            )}
          </View>
        </View>
      </LinearGradient>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export {CircleView};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    width: WP('20'),
  },
  firstContainer: {
    width: WP('17'),
    height: WP('17'),
    borderRadius: WP('10'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  interContainer: {
    width: WP('13'),
    height: WP('13'),
    borderRadius: WP('8'),
    backgroundColor: '#7c386d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: WP('10'),
    height: WP('10'),
    borderRadius: WP('5'),
    backgroundColor: '#6d3469',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: WP('7'),
    height: WP('7'),
  },
  textStyle: {
    fontSize: size.xsmall,
    marginTop: WP('2'),
    fontWeight: 'bold',
  },
});
