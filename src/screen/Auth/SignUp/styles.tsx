import {StyleSheet} from 'react-native';
import {colors, HP, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  signupContainer: {
    width: WP('100'),
    height: HP('75'),
    backgroundColor: colors.white,
    marginTop: HP('25'),
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
    fontSize: size.normal,
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
});
export default styles;
