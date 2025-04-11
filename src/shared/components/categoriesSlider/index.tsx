import { createStyles } from './styles';
import Typography from '../Typography';
import useDarkMode from '../../hooks/useDarkMode';
import { Category } from '../../types/category';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';

interface CategoriesSliderProps {
  categories?: Category[];
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

const CategoriesSlider: React.FC<CategoriesSliderProps> = ({
  categories = [],
  selectedCategory,
  onSelectCategory
}) => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);

  if (!categories || categories.length === 0) {
    return null;
  }

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
          onPress={() => onSelectCategory?.(category.name)}
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
