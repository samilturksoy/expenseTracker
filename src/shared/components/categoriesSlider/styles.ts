import { normalize } from '../../helpers';
import color from '../../constans/colors';
import { FONT } from '../../constans/fonts';
import { StyleSheet } from 'react-native';

export const createStyles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flexGrow: 0,
    marginHorizontal: normalize(-16),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(8)
  },
  categoryCard: {
    backgroundColor: isDarkMode ? color.neutral.gray : color.neutral.white,
    borderRadius: normalize(12),
    padding: normalize(12),
    marginRight: normalize(8),
    alignItems: 'center',
    width: normalize(90),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5
  },
  selectedCard: {
    backgroundColor: color.main.blue
  },
  categoryIconContainer: {
    width: normalize(48),
    height: normalize(48),
    borderRadius: normalize(24),
    backgroundColor: color.neutral.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalize(8),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3
  },
  categoryIcon: {
    width: normalize(24),
    height: normalize(24)
  },
  categoryName: {
    fontSize: normalize(14),
    fontFamily: FONT.MEDIUM,
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    textAlign: 'center'
  },
  selectedText: {
    color: color.neutral.white
  }
}); 
