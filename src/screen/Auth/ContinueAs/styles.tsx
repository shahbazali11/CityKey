import {StyleSheet} from 'react-native';
import {colors, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: size.h2,
    color: colors.white,
    fontWeight: '800',
    marginHorizontal: WP('5'),
    marginBottom: WP('3'),
  },
  cardsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: WP('5'),
  },
});
export default styles;
