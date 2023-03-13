import {StyleSheet} from 'react-native';
import {colors, HP, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainCotainer: {
    flex: 1,
  },
  paginationDots: {
    width: WP('10'),
    height: WP('2'),
    borderRadius: 5,
    marginRight: 3,
    backgroundColor: 'red',
  },

  activePaginationDots: {
    width: WP('10'),
    height: WP('10'),
    borderRadius: WP('5'),
    marginRight: 3,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView: {
    width: WP('4'),
    height: WP('4'),
    borderRadius: WP('2'),
    backgroundColor: colors.white,
  },
});

export default styles;
