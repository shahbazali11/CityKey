import React, {FC} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, size, WP} from '../../shared/exporter';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (txt: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: string;
}

const AppInput: FC<Props> = ({
  onChangeText,
  value,
  placeholder,
  keyboardType,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={styles.inputStyle}
      />
    </View>
  );
};

export {AppInput};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: WP('5'),
  },
  inputStyle: {
    fontSize: size.medium,
    borderRadius: WP('10'),
    borderWidth: WP('1.5'),
    borderColor: colors.g2,
    paddingHorizontal: WP('8'),
    paddingVertical: WP('2'),
    marginTop: WP('3'),
  },
});
