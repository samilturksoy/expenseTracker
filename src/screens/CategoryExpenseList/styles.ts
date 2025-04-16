import { normalize } from '../../shared/helpers';
import color from '../../shared/constans/colors';
import { FONT } from '../../shared/constans/fonts';
import { StyleSheet } from 'react-native';

export const createStyles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.main.blue
  },
  body: {
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    marginTop: normalize(-45),
    borderTopRightRadius: normalize(16),
    borderTopStartRadius: normalize(16),
    flex: 1,
    paddingHorizontal: normalize(16),
    paddingTop: normalize(24)
  },
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
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(24),
    paddingHorizontal: normalize(24),
    marginTop: normalize(8)
  },
  categoryIconContainer: {
    width: normalize(64),
    height: normalize(64),
    borderRadius: normalize(32),
    backgroundColor: color.neutral.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(16),
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
    width: normalize(36),
    height: normalize(36)
  },
  categoryTextContainer: {
    flex: 1
  },
  categoryName: {
    fontSize: normalize(28),
    fontFamily: FONT.BOLD,
    color: color.neutral.white,
    marginBottom: normalize(4)
  },
  totalAmount: {
    fontSize: normalize(20),
    fontFamily: FONT.MEDIUM,
    color: color.neutral.lightGray
  },
  sectionTitle: {
    fontSize: normalize(18),
    fontFamily: FONT.BOLD,
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    marginBottom: normalize(16)
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: isDarkMode ? color.neutral.gray : color.neutral.white,
    borderRadius: normalize(12),
    padding: normalize(16),
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
  expenseTitle: {
    fontSize: normalize(16),
    fontFamily: FONT.BOLD,
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    marginBottom: normalize(4)
  },
  expenseDate: {
    fontSize: normalize(12),
    fontFamily: FONT.MEDIUM,
    color: isDarkMode ? color.neutral.lightGray : color.neutral.darkGray
  },
  expenseAmount: {
    fontSize: normalize(16),
    fontFamily: FONT.BOLD,
    color: isDarkMode ? color.neutral.white : color.neutral.black
  }
}); 