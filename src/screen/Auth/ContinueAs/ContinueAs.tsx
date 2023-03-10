import React, {useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {UserCard} from '../../../components';
import {appImages} from '../../../shared/exporter';
import styles from './styles';

const ContinueAs = () => {
  return (
    <ImageBackground source={appImages.city} style={styles.mainContainer}>
      <Text style={styles.textStyle}>I am</Text>
      <View style={styles.cardsContainerStyle}>
        <UserCard
          title="Citykey Member"
          userImage={appImages.citykeyMember}
          navigationScreen="Welcome"
        />
        <UserCard
          title="User"
          userImage={appImages.user}
          navigationScreen="Welcome"
        />
      </View>
    </ImageBackground>
  );
};

export default ContinueAs;
