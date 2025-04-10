
import {createStyles} from './styles';
import Typography from '../Typography';
import useDarkMode from '../../hooks/useDarkMode';
import { View } from 'react-native';
import React from 'react';


export default function Balance() {
  const {isDarkMode} = useDarkMode();
  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Typography customStyle={styles.title} value="Toplam Harcaman" />
          <Typography customStyle={styles.balance} value="2,021 TL" />
        </View>
      </View>
    </View>
  );
}
