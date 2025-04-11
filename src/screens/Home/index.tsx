import { createStyles } from './styles';
import NavBar from './Components/navBar';
import ExpensesList from './Components/expensesList';
import useDarkMode from '../../shared/hooks/useDarkMode';
import HeroBackground from '../../shared/components/heroBackground';
import color from '../../shared/constans/colors';
import Balance from '../../shared/components/balance';
import CategoriesSlider from '../../shared/components/categoriesSlider';
import Typography from '../../shared/components/Typography';
import { RootStackParamList } from '../../shared/types/navigation';
import { Expense } from '../../shared/types/expense';
import expensesData from '../../shared/constans/expenses.json';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);
  const navigation = useNavigation<NavigationProp>();
  const [expenses, setExpenses] = useState<Expense[]>(expensesData.expenses);

  const handleAddExpense = (newExpense: Expense) => {
    setExpenses(prevExpenses => [newExpense, ...prevExpenses]);
  };

  return (
    <View style={{flex: 1, backgroundColor: color.main.blue}}>
      <HeroBackground>
        <NavBar />
        <Balance amount={expenses.reduce((sum, expense) => sum + expense.amount, 0)} title="Toplam Harcama" />
      </HeroBackground>

      <View style={styles.body}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Typography customStyle={styles.sectionTitle} value="Kategoriler" />
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <Typography customStyle={styles.seeAllButton} value="Tümünü Gör" />
            </TouchableOpacity>
          </View>
          <CategoriesSlider />
        </View>

        <View style={[styles.section, { flex: 1 }]}>
          <View style={styles.sectionHeader}>
            <Typography customStyle={styles.sectionTitle} value="Son Harcamalar" />
          </View>
          <ExpensesList expenses={expenses} />
        </View>

        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('AddExpense', { onAddExpense })}
        >
          <Typography 
            customStyle={styles.addButtonText} 
            value="+ Yeni Harcama Ekle" 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
