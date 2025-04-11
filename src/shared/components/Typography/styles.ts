import { normalize } from '../../helpers';
import { FONT } from '../../constans/fonts';
import {StyleSheet} from 'react-native';


export const createStyles = (isDarkMode: boolean) => StyleSheet.create({
  text: {
    color: isDarkMode ? 'white' : '#000',
    fontSize: normalize(14),
    fontFamily: FONT.NORMAL
  }
});
