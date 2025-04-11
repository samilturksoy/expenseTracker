import { normalize } from '../../../../shared/helpers';
import color from '../../../../shared/constans/colors';
import { FONT } from '../../../../shared/constans/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  expenseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: normalize(16),
    borderBottomWidth: 1,
    borderBottomColor: color.stroke.gray
  },
  leftContent: {
    flex: 1
  },
  title: {
    fontSize: normalize(16),
    fontFamily: FONT.MEDIUM,
    color: color.neutral.black,
    marginBottom: normalize(4)
  },
  details: {
    fontSize: normalize(14),
    fontFamily: FONT.NORMAL,
    color: color.neutral.darkGray
  },
  amount: {
    fontSize: normalize(16),
    fontFamily: FONT.BOLD,
    color: color.main.blue
  },
  date: {
    fontSize: normalize(12),
    fontFamily: FONT.NORMAL,
    color: color.neutral.darkGray,
    marginTop: normalize(4)
  }
}); 
