import { createStyles } from './styles';
import Typography from '../../shared/components/Typography';
import useDarkMode from '../../shared/hooks/useDarkMode';
import HeroBackground from '../../shared/components/heroBackground';
import color from '../../shared/constans/colors';
import { RootStackParamList } from '../../shared/types/navigation';
import { Category as CategoryModel } from '../../shared/types/category';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import CategoriesSlider from '../../shared/components/categoriesSlider';

type CategoriesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type CategoriesScreenProps = NativeStackScreenProps<RootStackParamList, 'Categories'>;

const CategoriesScreen = () => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);
  const navigation = useNavigation<CategoriesScreenNavigationProp>();
  const route = useRoute<CategoriesScreenProps['route']>();
  const { onAddCategory, expenses = [] } = route.params;
  const [localCategories, setLocalCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    if (route.params?.categories) {
      setLocalCategories(route.params.categories);
    }
  }, [route.params?.categories]);

  const handleLocalAddCategory = (newCategory: CategoryModel) => {
    onAddCategory(newCategory);
    setLocalCategories(prev => [...prev, newCategory]);
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
          <Typography customStyle={styles.headerText} value="Kategoriler" />
          <View style={{ width: 70 }} />
        </View>
      </HeroBackground>

      <View style={styles.body}>
        <CategoriesSlider 
          categories={localCategories}
          expenses={expenses}
          onDeleteExpense={(id) => {
            // Handle expense deletion if needed
          }}
        />

        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('AddCategories', { onAddCategory: handleLocalAddCategory })}
        >
          <Typography 
            customStyle={styles.addButtonText} 
            value="Yeni Kategori Ekle" 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoriesScreen;
