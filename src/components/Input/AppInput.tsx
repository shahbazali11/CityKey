import React, {FC} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

interface Props {}

const AppInput: FC<Props> = () => {
  return (
    <View>
      <TextInput value="" />
      <Text>AppInput</Text>
    </View>
  );
};

export {AppInput};

const styles = StyleSheet.create({
  mainContainer: {},
});
