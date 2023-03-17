import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, size, WP} from '../../shared/exporter';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  rightTxt?: string;
  headerTitle: string;
  onBackPress: () => void;
  onRightPress?: () => void;
}

const AppHeader: FC<Props> = ({
  rightTxt,
  headerTitle,
  onBackPress,
  onRightPress,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onBackPress}>
        <Icon name="arrow-back" size={30} color={colors.white} />
      </TouchableOpacity>
      <Text style={styles.headerTxtStyle}>{headerTitle}</Text>
      {rightTxt ? (
        <TouchableOpacity onPress={onRightPress}>
          <Text style={styles.rightStyle}>{rightTxt}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={{color: colors.red}}>Exit</Text>
      )}
    </View>
  );
};

export {AppHeader};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.red,
    padding: WP('5'),
  },
  headerTxtStyle: {
    color: colors.white,
    fontSize: size.large,
    fontWeight: 'bold',
  },
  rightStyle: {
    color: colors.white,
    fontSize: size.small,
    fontWeight: '600',
  },
});
