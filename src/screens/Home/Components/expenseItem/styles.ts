import { normalize } from '../../../../shared/helpers';
import color from '../../../../shared/constans/colors';
import { FONT } from '../../../../shared/constans/fonts';
import { StyleSheet } from 'react-native';

export const styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: isDarkMode ? color.neutral.gray : color.neutral.white,
    borderRadius: normalize(12),
    padding: normalize(12),
    marginBottom: normalize(8),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  iconContainer: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(20),
    backgroundColor: color.neutral.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(12)
  },
  icon: {
    width: normalize(24),
    height: normalize(24)
  },
  infoContainer: {
    flex: 1
  },
  title: {
    fontSize: normalize(16),
    fontFamily: FONT.BOLD,
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    marginBottom: normalize(4)
  },
  category: {
    fontSize: normalize(14),
    fontFamily: FONT.MEDIUM,
    color: isDarkMode ? color.neutral.lightGray : color.neutral.darkGray
  },
  rightContainer: {
    alignItems: 'flex-end'
  },
  amount: {
    fontSize: normalize(16),
    fontFamily: FONT.BOLD,
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    marginBottom: normalize(4)
  },
  date: {
    fontSize: normalize(12),
    fontFamily: FONT.MEDIUM,
    color: isDarkMode ? color.neutral.lightGray : color.neutral.darkGray
  }
}); 