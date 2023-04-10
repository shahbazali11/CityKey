import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import styles from './styles';
import {
  AppButton,
  AppHeader,
  AppInput,
  CircleView,
  WellDoneCard,
} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {appImages, colors, size, WP} from '../../../shared/exporter';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const UploadeImages = () => {
  const navigation = useNavigation();
  const [modalDisplayName, setModalDisplayName] = useState(false);
  const [modalAdText, setModalAdText] = useState(false);
  const [name, setName] = useState('');

  const renderListItems = (item: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: WP('1'),
          marginHorizontal: WP('4'),
        }}>
        <View style={styles.bullets}></View>
        <Text style={styles.featureTxtStyle}>{item.list}</Text>
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
      list: 'Change Icon in th corner to \n\n your business logo and have \n\n saved it on your phone.',
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
      id: 5,
      list: 'Upload 20 videos to edit',
    },
  ];

  return (
    <ScrollView style={styles.mainContainer} keyboardShouldPersistTaps="always">
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
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalDisplayName}
          onRequestClose={() => setModalDisplayName(!modalDisplayName)}>
          <View style={styles.mainModalView}>
            <View style={styles.modalView}>
              <View style={styles.innerContainer}>
                <Text style={styles.headerTxt}>Display Name</Text>
                <Text style={styles.detailTxt}>Enter Your Display Name</Text>
              </View>
              <TextInput
                value={name}
                onChangeText={txt => setName(txt)}
                style={{
                  borderWidth: WP('0.5'),
                  borderRadius: WP('2'),
                  height: WP('30'),
                  borderColor: colors.g13,
                }}
                textAlignVertical={'top'}
                multiline
                numberOfLines={3}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AppButton
                  title="Cancel"
                  onButtonPress={() => {
                    setName('');
                    setModalDisplayName(!modalDisplayName);
                  }}
                  buttonViewStyle={styles.modalButtonStyle}
                  txtStyle={styles.cancelButtonTxtStyle}
                />
                <AppButton
                  title="Submit"
                  onButtonPress={() => setModalDisplayName(!modalDisplayName)}
                  withLinear
                  buttonViewStyle={styles.modalButtonStyle}
                  txtStyle={styles.buttonTxtStyle}
                />
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.individualContainerStyle}
          onPress={() => setModalDisplayName(!modalDisplayName)}>
          <View style={styles.innerContainer}>
            <Text style={styles.headerTxt}>Display Name</Text>
            <Text style={styles.detailTxt}>Citiykey Directory</Text>
          </View>
          <TouchableOpacity>
            <Icon name="chevron-forward-sharp" size={20} color={colors.black} />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: colors.g11}}></View>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalAdText}
          onRequestClose={() => setModalAdText(!modalAdText)}>
          <View style={styles.mainModalView}>
            <View
              style={[
                styles.modalView,
                {width: WP('70'), padding: WP('3'), height: WP(50)},
              ]}>
              <View
                style={[
                  styles.innerContainer,
                  {height: WP('10'), justifyContent: 'flex-start'},
                ]}>
                <Text
                  style={[
                    styles.headerTxt,
                    {fontWeight: '500', color: colors.g12},
                  ]}>
                  Ad Text
                </Text>
                <TouchableOpacity style={styles.downlodButton}>
                  <FontAwesome
                    name="cloud-download"
                    size={25}
                    color={colors.white}
                  />
                  <Text> DownLoad Now</Text>
                </TouchableOpacity>
                <View style={styles.likeShireConitainer}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="heart" size={15} color={colors.g4} />
                    <Text> Like</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome name="comment" size={15} color={colors.g4} />
                    <Text> Comment</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      name="share-social-sharp"
                      size={15}
                      color={colors.g4}
                    />
                    <Text> Share</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <AppButton
                  title="Cancel"
                  onButtonPress={() => {
                    setModalAdText(!modalAdText);
                  }}
                  buttonViewStyle={styles.modalButtonStyle}
                  txtStyle={styles.cancelButtonTxtStyle}
                />
                <AppButton
                  title="Submit"
                  onButtonPress={() => setModalAdText(!modalAdText)}
                  withLinear
                  buttonViewStyle={styles.modalButtonStyle}
                  txtStyle={styles.buttonTxtStyle}
                />
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.individualContainerStyle}
          onPress={() => setModalAdText(!modalAdText)}>
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
              <Icon
                name="lock-closed"
                size={23}
                style={{
                  alignSelf: 'flex-end',
                  justifyContent: 'flex-start',
                  color: '#e1b6c2',
                }}
              />
              <Text style={styles.featureHeadingTxtStyle}>Features</Text>
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
      <View style={styles.imageReplaceContainer}>
        <Text style={styles.headerTxt}>Profile Image</Text>
        <Text style={styles.detailTxt}>Atleast 128*128</Text>
        <AppButton
          title="Replace"
          onButtonPress={() => {}}
          txtStyle={styles.buttonTxtStyle}
          buttonViewStyle={styles.buttonStyle}
        />
      </View>
      <AppButton
        title="NEXT"
        withLinear
        onButtonPress={() => {}}
        buttonViewStyle={styles.nextbuttonStyle}
        txtStyle={styles.nextbuttonTxt}
      />
    </ScrollView>
  );
};

export default UploadeImages;
