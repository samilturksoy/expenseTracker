import { normalize } from '../../../../shared/helpers';
import color from '../../../../shared/constans/colors';
import { FONT } from '../../../../shared/constans/fonts';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(24),
    marginTop: normalize(0),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nameUser: {
    fontSize: normalize(20),
    fontFamily: FONT.BOLD,
    color: color.neutral.white
  }
});
