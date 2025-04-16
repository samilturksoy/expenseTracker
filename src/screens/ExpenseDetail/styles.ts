import { normalize } from '../../shared/helpers';
import color from '../../shared/constans/colors';
import { FONT } from '../../shared/constans/fonts';
import { StyleSheet } from 'react-native';

export const createStyles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.main.blue
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
  amountContainer: {
    paddingHorizontal: normalize(24),
    marginTop: normalize(8),
    marginBottom: normalize(24)
  },
  amountLabel: {
    fontSize: normalize(16),
    fontFamily: FONT.MEDIUM,
    color: color.neutral.lightGray,
    marginBottom: normalize(4)
  },
  amount: {
    fontSize: normalize(32),
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
    paddingTop: normalize(24)
  },
  card: {
    backgroundColor: isDarkMode ? color.neutral.gray : color.neutral.white,
    borderRadius: normalize(16),
    padding: normalize(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(24),
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    borderRadius: normalize(12),
    padding: normalize(16)
  },
  categoryIconContainer: {
    width: normalize(56),
    height: normalize(56),
    borderRadius: normalize(28),
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
    width: normalize(32),
    height: normalize(32)
  },
  categoryInfo: {
    flex: 1
  },
  categoryLabel: {
    fontSize: normalize(14),
    fontFamily: FONT.MEDIUM,
    color: isDarkMode ? color.neutral.lightGray : color.neutral.darkGray,
    marginBottom: normalize(4)
  },
  categoryText: {
    fontSize: normalize(18),
    fontFamily: FONT.BOLD,
    color: isDarkMode ? color.neutral.white : color.neutral.black
  },
  missingText: {
    color: color.secondary.red,
    fontFamily: FONT.MEDIUM,
    fontSize: normalize(16)
  },
  infoSection: {
    marginBottom: normalize(24)
  },
  infoLabel: {
    fontSize: normalize(14),
    fontFamily: FONT.MEDIUM,
    color: isDarkMode ? color.neutral.lightGray : color.neutral.darkGray,
    marginBottom: normalize(8)
  },
  infoValue: {
    fontSize: normalize(16),
    fontFamily: FONT.MEDIUM,
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    lineHeight: normalize(24)
  },
  deleteButton: {
    backgroundColor: color.secondary.red,
    borderRadius: normalize(12),
    paddingVertical: normalize(16),
    alignItems: 'center',
    marginTop: normalize(8)
  },
  deleteButtonText: {
    color: color.neutral.white,
    fontSize: normalize(16),
    fontFamily: FONT.BOLD
  }
}); 
