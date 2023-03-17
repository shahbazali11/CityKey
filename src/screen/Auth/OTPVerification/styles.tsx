import {StyleSheet} from 'react-native';
import {colors, WP, size} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageStyle: {
    width: WP('100'),
    height: WP('100'),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: WP('10'),
  },
  signupContainer: {
    backgroundColor: colors.white,
    borderTopRightRadius: WP('12'),
    borderTopLeftRadius: WP('12'),
  },
  signinTxt: {
    marginTop: WP('10'),
    fontSize: size.medium,
    marginHorizontal: WP('5'),
    fontWeight: '600',
  },
  addvertisementTxt: {
    marginTop: WP('2'),
    fontSize: size.small,
    marginHorizontal: WP('5'),
    fontWeight: '400',
    color: colors.g7,
    marginBottom: WP('4'),
  },
  buttonViewStyle: {
    width: WP('90'),
    paddingVertical: WP('3'),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: WP('10'),
    marginTop: WP('3'),
  },
  buttonTxt: {
    fontSize: size.h6,
    fontWeight: '500',
    color: colors.white,
  },
  signinTxtContainer: {
    marginTop: WP('3'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinTxtBold: {
    fontSize: size.medium,
    color: colors.red,
    fontWeight: 'bold',
  },
  signinText: {
    fontSize: size.medium,
    color: colors.g1,
  },
  buttonTxtStyle: {
    color: colors.white,
  },
  buttonContainer: {
    backgroundColor: colors.red,
    marginTop: WP('5'),
  },
});
export default styles;
