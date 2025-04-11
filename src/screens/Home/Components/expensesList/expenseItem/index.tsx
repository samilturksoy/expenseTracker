import { styles } from '../styles';
import Typography from '../../../../../shared/components/Typography';
import { Expense } from '../../../../../shared/types/expense';
import { View, TouchableOpacity } from 'react-native';
import React from 'react';

interface ExpenseItemProps {
  item: Expense;
  onPress: () => void;
}

const ExpenseItem = ({ item, onPress }: ExpenseItemProps) => {
  return (
    <TouchableOpacity style={styles.expenseItem} onPress={onPress}>
      <View style={styles.leftContent}>
        <Typography customStyle={styles.title} value={item.title} />
        <Typography customStyle={styles.details} value={item.category} />
        <Typography customStyle={styles.date} value={item.date} />
      </View>
      <Typography 
        customStyle={styles.amount} 
        value={`${item.amount.toFixed(2)} TL`} 
      />
    </TouchableOpacity>
  );
};

export default ExpenseItem; 
