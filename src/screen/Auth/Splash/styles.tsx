import {StyleSheet} from 'react-native';
import {colors, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  cityLogo: {
    width: WP('10'),
    height: WP('10'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  citykeyTxt: {
    fontSize: size.h1,
    fontWeight: 'bold',
    color: colors.purple,
    alignSelf: 'center',
    marginTop: WP('50'),
  },
});
export default styles;
