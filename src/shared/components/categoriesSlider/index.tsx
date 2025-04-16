import { createStyles } from './styles';
import Typography from '../Typography';
import useDarkMode from '../../hooks/useDarkMode';
import { Category } from '../../types/category';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

interface CategoriesSliderProps {
  categories?: Category[];
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  mode?: 'selection' | 'navigation';
  expenses?: any[];
  onDeleteExpense?: (id: number) => void;
}

const CategoriesSlider: React.FC<CategoriesSliderProps> = ({
  categories = [],
  selectedCategory,
  onSelectCategory,
  mode = 'navigation',
  expenses = [],
  onDeleteExpense
}) => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  if (!categories || categories.length === 0) {
    return null;
  }

  const handleCategoryPress = (category: Category) => {
    if (mode === 'selection' && onSelectCategory) {
      onSelectCategory(category.name);
    } else {
      // Filter expenses for this category
      const categoryExpenses = expenses.filter(expense => expense.category === category.name);
      navigation.navigate('CategoryExpenseList', {
        category,
        expenses: categoryExpenses,
        onDeleteExpense
      });
    }
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.categoryCard,
            selectedCategory === category.name && styles.selectedCard
          ]}
          onPress={() => handleCategoryPress(category)}
        >
          <View style={styles.categoryIconContainer}>
            <Image
              source={{ uri: category.imageUrl }}
              style={styles.categoryIcon}
              resizeMode="contain"
            />
          </View>
          <Typography
            customStyle={[
              styles.categoryName,
              selectedCategory === category.name && styles.selectedText
            ]}
            value={category.name}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoriesSlider; 
