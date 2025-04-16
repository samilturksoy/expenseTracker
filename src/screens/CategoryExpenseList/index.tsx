import { createStyles } from './styles';
import Typography from '../../shared/components/Typography';
import useDarkMode from '../../shared/hooks/useDarkMode';
import HeroBackground from '../../shared/components/heroBackground';
import color from '../../shared/constans/colors';
import { RootStackParamList } from '../../shared/types/navigation';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Expense } from '../../shared/types/expense';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RouteProp = NativeStackScreenProps<RootStackParamList, 'CategoryExpenseList'>['route'];

const CategoryExpenseList = () => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp>();
  const { category, expenses, onDeleteExpense, categories } = route.params;

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const handleExpensePress = (expense: Expense) => {
    navigation.navigate('ExpenseDetail', { 
      expense, 
      onDeleteExpense,
      categories
    });
  };

  return (
    <View style={styles.container}>
      <HeroBackground>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Typography 
              customStyle={styles.backButtonText} 
              value="← Geri" 
            />
          </TouchableOpacity>
          <Typography customStyle={styles.headerText} value="Kategori Detayı" />
          <View style={{ width: 70 }} />
        </View>

        <View style={styles.categoryInfo}>
          <View style={styles.categoryIconContainer}>
            <Image
              source={{ uri: category.imageUrl }}
              style={styles.categoryIcon}
              resizeMode="contain"
            />
          </View>
          <View style={styles.categoryTextContainer}>
            <Typography customStyle={styles.categoryName} value={category.name} />
            <Typography 
              customStyle={styles.totalAmount} 
              value={`${totalAmount.toLocaleString('tr-TR')} TL`} 
            />
          </View>
        </View>
      </HeroBackground>

      <View style={styles.body}>
        <Typography customStyle={styles.sectionTitle} value="Harcamalar" />
        {expenses.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Typography 
              customStyle={styles.emptyText} 
              value="Bu kategoride henüz harcama bulunmuyor" 
            />
          </View>
        ) : (
          <FlatList
            data={expenses}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.expenseItem}
                onPress={() => handleExpensePress(item)}
              >
                <View>
                  <Typography customStyle={styles.expenseTitle} value={item.title} />
                  <Typography customStyle={styles.expenseDate} value={item.date} />
                </View>
                <Typography 
                  customStyle={styles.expenseAmount} 
                  value={`${item.amount.toLocaleString('tr-TR')} TL`} 
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default CategoryExpenseList;