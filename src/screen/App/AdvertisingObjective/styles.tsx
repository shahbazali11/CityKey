import {StyleSheet} from 'react-native';
import {colors, HP, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainCotainer: {
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
  worldImageStyle: {
    width: WP('17'),
    height: WP('17'),
    tintColor: colors.red,
  },
  linkContainer: {
    width: WP('90'),
    height: WP('25'),
    alignSelf: 'center',
    backgroundColor: colors.white,
    padding: WP('5'),
    borderRadius: WP('3'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkHeadingTxtStyle: {
    fontSize: size.normal,
    fontWeight: 'bold',
  },
  noteTxtStyle: {
    margin: WP('5'),
    marginVertical: WP('10'),
    fontStyle: 'italic',
    fontSize: size.tiny,
    color: colors.g7,
  },
  nextButtonStyle: {
    width: WP('40'),
    paddingVertical: WP('5'),
  },
  buttonTxtStyle: {color: colors.white, fontSize: size.medium},
});

export default styles;
