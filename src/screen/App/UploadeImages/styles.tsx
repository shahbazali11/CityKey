import {StyleSheet} from 'react-native';
import {WP, colors, signup, size, HP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  paginationDots: {
    width: WP('10'),
    height: WP('1'),
    borderRadius: 5,
    marginRight: 3,
    backgroundColor: colors.g7,
  },

  activePaginationDots: {
    width: WP('8'),
    height: WP('8'),
    borderRadius: WP('4'),
    marginRight: 3,
    backgroundColor: colors.g7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView: {
    width: WP('3'),
    height: WP('3'),
    borderRadius: WP('2'),
    backgroundColor: colors.g9,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: WP('8'),
    alignSelf: 'center',
  },
  displayContainer: {
    width: WP('90'),
    height: WP('45'),
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: WP('3'),
    justifyContent: 'center',
    padding: WP('5'),
  },
  innerContainer: {
    width: WP('70'),
    height: WP('20'),
    justifyContent: 'center',
  },
  headerTxt: {
    fontSize: size.small,
    fontWeight: '900',
    marginBottom: WP('2'),
  },
  individualContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailTxt: {
    fontSize: size.small,
    color: colors.g11,
  },
  previewContainer: {
    marginTop: WP('8'),
    width: WP('90'),
    backgroundColor: colors.red,
    alignSelf: 'center',
    padding: WP('5'),
    borderTopRightRadius: WP('4'),
    borderTopLeftRadius: WP('4'),
  },
  previewTxtStyle: {
    fontSize: size.medium,
    fontWeight: 'bold',
    color: colors.white,
  },
  previewDetailContainer: {
    width: WP('90'),
    backgroundColor: colors.white,
    alignSelf: 'center',
    padding: WP('5'),
    borderBottomRightRadius: WP('4'),
    borderBottomLeftRadius: WP('4'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  uploadImageContainer: {
    width: WP('90'),
    height: HP('100'),
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginTop: WP('8'),
    borderRadius: WP('4'),
    padding: WP('5'),
  },
  uploadImageView: {
    marginTop: WP('5'),
    width: WP('80'),
    height: HP('70'),
    backgroundColor: colors.b5,
    borderRadius: WP('4'),
    padding: WP('5'),
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  uploadIconView: {
    width: WP('10'),
    height: WP('10'),
  },
  textView: {},
  featuresContainer: {
    width: WP('90'),
    height: WP('120'),
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: WP('4'),
    marginTop: WP('8'),
    padding: WP('5'),
  },
  featureCardStyle: {},
});

export default styles;
