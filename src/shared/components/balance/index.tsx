import {createStyles} from './styles';
import Typography from '../Typography';
import useDarkMode from '../../hooks/useDarkMode';
import { View } from 'react-native';
import React from 'react';

interface BalanceProps {
  amount: number;
  title?: string;
}

export default function Balance({ amount, title = 'Toplam Harcaman' }: BalanceProps) {
  const {isDarkMode} = useDarkMode();
  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Typography customStyle={styles.title} value={title} />
          <Typography customStyle={styles.balance} value={`${amount.toFixed(2)} TL`} />
        </View>
      </View>
    </View>
  );
}
