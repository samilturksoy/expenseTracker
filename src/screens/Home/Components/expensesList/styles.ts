import { normalize } from '../../../../shared/helpers';
import color from '../../../../shared/constans/colors';
import { FONT } from '../../../../shared/constans/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emptyContainer: {
    backgroundColor: color.neutral.white,
    borderRadius: normalize(12),
    padding: normalize(16),
    marginVertical: normalize(8),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5
  },
  emptyText: {
    fontSize: normalize(14),
    fontFamily: FONT.MEDIUM,
    color: color.neutral.darkGray,
    textAlign: 'center'
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
