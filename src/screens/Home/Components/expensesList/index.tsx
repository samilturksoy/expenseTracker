import { styles } from './styles';
import ExpenseItem from '../expenseItem';
import { Expense } from '../../../../shared/types/expense';
import { Category } from '../../../../shared/types/category';
import { RootStackParamList } from '../../../../shared/types/navigation';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface ExpensesListProps {
  expenses: Expense[];
  categories: Category[];
  onDeleteExpense: (id: number) => void;
}

export default function ExpensesList({ expenses, categories, onDeleteExpense }: ExpensesListProps) {
  const navigation = useNavigation<NavigationProp>();
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
            categories={categories}
            onPress={() => handleExpensePress(item)}
          />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
