import { normalize } from '../../helpers';
import color from '../../constans/colors';
import { FONT } from '../../constans/fonts';
import { StyleSheet } from 'react-native';


export const createStyles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    paddingHorizontal: normalize(24),
    paddingTop:normalize(24)
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    borderRadius: normalize(16),
    paddingHorizontal: normalize(28),
    paddingVertical: normalize(18)
  },
  title: {
    color: color.neutral.darkGray,
    fontSize: normalize(14)
  },
  balance: {
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    fontSize: normalize(24),
    fontFamily: FONT.BOLD,
    marginTop: normalize(4)
  }
});
