import {StyleSheet} from 'react-native';
import {colors, HP, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  signupContainer: {
    width: WP('100'),
    height: HP('70'),
    backgroundColor: colors.white,
    marginTop: HP('30'),
    borderTopRightRadius: WP('12'),
    borderTopLeftRadius: WP('12'),
  },
  signinTxt: {
    marginTop: WP('15'),
    fontSize: size.medium,
    marginHorizontal: WP('5'),
    fontWeight: '600',
  },
  addvertisementTxt: {
    marginTop: WP('4'),
    fontSize: size.normal,
    marginHorizontal: WP('5'),
    fontWeight: '400',
    color: colors.g7,
  },
  buttonViewStyle: {
    width: WP('90'),
    paddingVertical: WP('3'),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: WP('10'),
  },
  buttonTxt: {
    fontSize: size.h6,
    fontWeight: '500',
    color: colors.white,
  },
});
export default styles;
