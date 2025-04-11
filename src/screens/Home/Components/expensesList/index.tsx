import { styles } from './styles';
import Typography from '../../../../shared/components/Typography';
import { Expense } from '../../../../shared/types/expense';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

interface ExpensesListProps {
  expenses: Expense[];
  onDeleteExpense: (id: number) => void;
}

export default function ExpensesList({ expenses, onDeleteExpense }: ExpensesListProps) {
  const navigation = useNavigation();
  const hasExpenses = expenses.length > 0;

  if (!hasExpenses) {
    return null;
  }

  const handleExpensePress = (expense: Expense) => {
    navigation.navigate('ExpenseDetail', { expense, onDeleteExpense });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={({ item }) => (
          <ExpenseItem 
            item={item} 
            onPress={() => handleExpensePress(item)}
          />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
