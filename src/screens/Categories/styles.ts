import { normalize } from '../../shared/helpers';
import color from '../../shared/constans/colors';
import { FONT } from '../../shared/constans/fonts';
import { StyleSheet } from 'react-native';

export const createStyles = (isDarkMode: boolean) => StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(24),
    paddingTop: normalize(20),
    marginBottom: normalize(8)
  },
  backButton: {
    width: normalize(70)
  },
  backButtonText: {
    color: color.neutral.white,
    fontSize: normalize(16),
    fontFamily: FONT.MEDIUM
  },
  headerText: {
    fontSize: normalize(18),
    fontFamily: FONT.BOLD,
    color: color.neutral.white
  },
  body: {
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    marginTop: normalize(-45),
    borderTopRightRadius: normalize(16),
    borderTopStartRadius: normalize(16),
    flex: 1,
    paddingHorizontal: normalize(16),
    paddingTop: normalize(16),
    paddingBottom: normalize(32)
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: normalize(24)
  },
  categoryCard: {
    width: '48%',
    backgroundColor: isDarkMode ? color.neutral.gray : color.neutral.white,
    borderRadius: normalize(16),
    padding: normalize(12),
    marginBottom: normalize(16),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5
  },
  categoryIconContainer: {
    width: normalize(56),
    height: normalize(56),
    borderRadius: normalize(28),
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
    width: normalize(32),
    height: normalize(32)
  },
  categoryName: {
    fontSize: normalize(16),
    fontFamily: FONT.BOLD,
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    textAlign: 'center'
  },
  addButton: {
    backgroundColor: color.main.blue,
    borderRadius: normalize(8),
    paddingVertical: normalize(16),
    alignItems: 'center'
  },
  addButtonText: {
    color: color.neutral.white,
    fontSize: normalize(16),
    fontFamily: FONT.BOLD
  }
}); 
