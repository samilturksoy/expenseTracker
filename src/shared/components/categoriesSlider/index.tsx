import { createStyles } from './styles';
import Typography from '../Typography';
import useDarkMode from '../../hooks/useDarkMode';
import categoriesData from '../../constans/categories.json';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';

interface CategoriesSliderProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

const CategoriesSlider: React.FC<CategoriesSliderProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categoriesData.categories.map((category, index) => (
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
