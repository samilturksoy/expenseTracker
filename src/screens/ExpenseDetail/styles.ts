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
    paddingTop: normalize(4)
  },
  card: {
    backgroundColor: isDarkMode ? color.neutral.gray : color.neutral.white,
    borderRadius: normalize(16),
    padding: normalize(12),
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
    marginBottom: normalize(12)
  },
  categoryIconContainer: {
    width: normalize(56),
    height: normalize(56),
    borderRadius: normalize(28),
    backgroundColor: color.neutral.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(12),
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
  categoryText: {
    fontSize: normalize(18),
    fontFamily: FONT.BOLD,
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    marginTop: normalize(4)
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(8)
  },
  label: {
    fontSize: normalize(14),
    fontFamily: FONT.MEDIUM,
    color: isDarkMode ? color.neutral.lightGray : color.neutral.darkGray
  },
  value: {
    fontSize: normalize(16),
    fontFamily: FONT.NORMAL,
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    flex: 1,
    marginLeft: normalize(8)
  },
  detailsContainer: {
    marginTop: normalize(4),
    marginBottom: normalize(12)
  },
  details: {
    fontSize: normalize(16),
    fontFamily: FONT.NORMAL,
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    marginTop: normalize(4),
    lineHeight: normalize(24)
  },
  deleteButton: {
    backgroundColor: color.secondary.red,
    borderRadius: normalize(8),
    paddingVertical: normalize(12),
    alignItems: 'center',
    marginTop: normalize(4)
  },
  deleteButtonText: {
    color: color.neutral.white,
    fontSize: normalize(16),
    fontFamily: FONT.BOLD
  }
}); 
