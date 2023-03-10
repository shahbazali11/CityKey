import {StyleSheet} from 'react-native';
import {colors, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  welcomeTxt: {
    marginTop: WP('50'),
    fontSize: size.h1,
    fontWeight: '500',
    color: colors.white,
    alignSelf: 'center',
  },
  welcomeTxtBold: {
    fontSize: size.h1,
    fontWeight: 'bold',
    color: colors.white,
    alignSelf: 'center',
  },
  signinTxtContainer: {
    marginTop: WP('5'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinTxt: {
    fontSize: size.medium,
    color: colors.white,
  },
  signinTxtBold: {
    fontSize: size.medium,
    color: colors.white,
    fontWeight: 'bold',
  },
});
export default styles;
