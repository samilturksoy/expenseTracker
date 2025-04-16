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
import { Expense as ExpenseModel } from '../../shared/types/expense';
import { Category as CategoryModel } from '../../shared/types/category';
import expensesData from '../../shared/constans/expenses.json';
import categoriesData from '../../shared/constans/categories.json';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RouteProp = NativeStackScreenProps<RootStackParamList, 'Home'>['route'];

const HomeScreen = () => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp>();

  const [expenses, setExpenses] = useState<ExpenseModel[]>(expensesData.expenses); //expensesData
  const [categories, setCategories] = useState<CategoryModel[]>(categoriesData.categories); //categoriesData

  const handleAddExpense = (newExpense: ExpenseModel) => {
    setExpenses(prevExpenses => [newExpense, ...prevExpenses]);
  };

  const handleDeleteExpense = (id: number) => {
    setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
  };

  const handleAddCategory = (newCategory: CategoryModel) => {
    setCategories(prevCategories => [...prevCategories, newCategory]);
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
            <TouchableOpacity onPress={() => navigation.navigate('Categories', { 
              categories: categories,
              onAddCategory: handleAddCategory,
              expenses: expenses
            })}>
              <Typography customStyle={styles.seeAllButton} value="Tümünü Gör" />
            </TouchableOpacity>
          </View>
          <CategoriesSlider 
            categories={categories} 
            expenses={expenses}
            onDeleteExpense={handleDeleteExpense}
          />
        </View>

        <View style={[styles.section, { flex: 1 }]}>
          <View style={styles.sectionHeader}>
            <Typography customStyle={styles.sectionTitle} value="Son Harcamalar" />
          </View>
          <ExpensesList 
            expenses={expenses} 
            categories={categories}
            onDeleteExpense={handleDeleteExpense} 
          />
        </View>

        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('AddExpense', { 
            onAddExpense: handleAddExpense,
            categories: categories 
          })}
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
