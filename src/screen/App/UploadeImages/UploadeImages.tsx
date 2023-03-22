import React, {useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView, FlatList} from 'react-native';
import styles from './styles';
import {AppHeader, CircleView, WellDoneCard} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {appImages, colors, size, WP} from '../../../shared/exporter';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const UploadeImages = () => {
  const navigation = useNavigation();

  const renderListItems = item => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={styles.bullets}></View>
        <Text>{item.list}</Text>
      </View>
    );
  };

  const [data, setData] = useState([
    {
      id: 1,
      image: '',
      type: '',
      title: 'Citiykey',
    },
    {
      id: 2,
      image: 'home',
      type: 'Foundation',
      title: 'News Feed',
    },
    {
      id: 3,
      image: 'chat',
      type: 'Entypo',
      title: 'Hello',
    },
    {
      id: 4,
      image: '',
      type: '',
      title: 'Pangle',
    },
  ]);

  const featuresList = [
    {
      id: 1,
      list: 'Change Icon in th corner to your business logo and have saved it on your phone.',
    },
    {
      id: 2,
      list: 'Editing Tools',
    },
    {
      id: 3,
      list: 'Change Background',
    },
    {
      id: 4,
      list: 'Add Music Effects',
    },
    {
      id: 2,
      list: 'Upload 20 videos to edit',
    },
  ];

  return (
    <ScrollView style={styles.mainContainer}>
      <AppHeader
        headerTitle="Advertising Objective"
        onBackPress={() => {
          navigation.goBack();
        }}
        rightTxt="Exit"
        onRightPress={() => {
          navigation.navigate('Login');
        }}
      />
      <View style={styles.sliderContainer}>
        <View
          style={[styles.activePaginationDots, {backgroundColor: colors.red}]}>
          <View style={styles.innerView}></View>
        </View>
        <View
          style={[styles.paginationDots, {backgroundColor: colors.red}]}></View>
        <View
          style={[styles.activePaginationDots, {backgroundColor: colors.red}]}>
          <View style={styles.innerView}></View>
        </View>
        <View style={styles.paginationDots}></View>
        <View style={styles.activePaginationDots}>
          <View style={styles.innerView}></View>
        </View>
      </View>
      <WellDoneCard />
      <View style={styles.displayContainer}>
        <TouchableOpacity style={styles.individualContainerStyle}>
          <View style={styles.innerContainer}>
            <Text style={styles.headerTxt}>Display Name</Text>
            <Text style={styles.detailTxt}>Citiykey Directory</Text>
          </View>
          <TouchableOpacity>
            <Icon name="chevron-forward-sharp" size={20} color={colors.black} />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: colors.g11}}></View>
        <TouchableOpacity style={styles.individualContainerStyle}>
          <View style={styles.innerContainer}>
            <Text style={styles.headerTxt}>Ad Text</Text>
            <Text style={styles.detailTxt}>
              Download now Like/Comment/Share
            </Text>
          </View>
          <Icon name="chevron-forward-sharp" size={20} color={colors.black} />
        </TouchableOpacity>
      </View>
      <View style={styles.previewContainer}>
        <Text style={styles.previewTxtStyle}>Ad Preview</Text>
      </View>
      <TouchableOpacity style={styles.previewDetailContainer}>
        <View>
          <Text style={styles.headerTxt}>Creative</Text>
          <Text style={styles.detailTxt}>You've uploaded 5 picture(s)</Text>
        </View>
        <Text style={[styles.headerTxt, {color: colors.red}]}>DELETE</Text>
      </TouchableOpacity>
      <View style={styles.uploadImageContainer}>
        <View>
          <FlatList
            data={data}
            horizontal
            renderItem={({item}) => (
              <CircleView
                title={item.title}
                image={item.image}
                type={item.type}
              />
            )}
          />
        </View>
        <TouchableOpacity style={styles.uploadImageView}>
          <Image source={appImages.upload} style={styles.uploadIconView} />
        </TouchableOpacity>
        <View style={styles.previewDetailContainer}>
          <View>
            <Text style={styles.headerTxt}>Turn Image to Video</Text>
            <Text
              style={[
                styles.detailTxt,
                {width: WP('60'), fontSize: size.xxsmall},
              ]}>
              Citiykey can generate videos based on your creatives
            </Text>
          </View>
          <Text style={[styles.headerTxt, {color: colors.red}]}>Change</Text>
        </View>
      </View>
      <View style={styles.featuresContainer}>
        <TouchableOpacity style={styles.individualContainerStyle}>
          <View style={styles.innerContainer}>
            <Text style={styles.headerTxt}>Call to Action</Text>
            <Text style={styles.detailTxt}>Pre-order now</Text>
          </View>
          <Icon name="chevron-forward-sharp" size={20} color={colors.black} />
        </TouchableOpacity>
        <LinearGradient
          style={styles.featureCardStyle}
          colors={['#cb322c', '#963359', '#614187']}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.priceView}>
              <Text style={styles.priceTxt}>$30</Text>
              <Text style={styles.detailPriceTxt}>Per Week</Text>
            </View>
            <View>
              <View style={styles.roundView}></View>
              <View style={styles.verticalLine}></View>
              <View style={[styles.roundView, {marginTop: WP('0')}]}></View>
            </View>
            <View style={styles.featuresView}>
              <Text>Features</Text>
              <View>
                <FlatList
                  data={featuresList}
                  renderItem={({item, index}) => renderListItems(item)}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default UploadeImages;
