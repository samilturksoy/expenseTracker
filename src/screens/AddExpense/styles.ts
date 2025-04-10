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
  form: {
    backgroundColor: isDarkMode ? color.neutral.gray : color.neutral.white,
    borderRadius: normalize(16),
    padding: normalize(16),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5
  },
  inputContainer: {
    marginBottom: normalize(16)
  },
  label: {
    fontSize: normalize(14),
    fontFamily: FONT.MEDIUM,
    color: isDarkMode ? color.neutral.lightGray : color.neutral.darkGray,
    marginBottom: normalize(8)
  },
  input: {
    height: normalize(48),
    borderWidth: 1,
    borderColor: isDarkMode ? color.neutral.darkGray : color.neutral.lightGray,
    borderRadius: normalize(8),
    paddingHorizontal: normalize(12),
    fontSize: normalize(16),
    fontFamily: FONT.NORMAL
  },
  textArea: {
    height: normalize(120),
    textAlignVertical: 'top',
    paddingTop: normalize(12)
  },
  addButton: {
    backgroundColor: color.main.blue,
    borderRadius: normalize(8),
    paddingVertical: normalize(16),
    alignItems: 'center',
    marginTop: normalize(16)
  },
  addButtonText: {
    color: color.neutral.white,
    fontSize: normalize(16),
    fontFamily: FONT.BOLD
  }
}); 
