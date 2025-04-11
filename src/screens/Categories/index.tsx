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

type CategoriesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type CategoriesScreenProps = NativeStackScreenProps<RootStackParamList, 'Categories'>;

const CategoriesScreen = () => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);
  const navigation = useNavigation<CategoriesScreenNavigationProp>();
  const route = useRoute<CategoriesScreenProps['route']>();
  const { onAddCategory } = route.params;
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

  const renderCategory = ({ item: category }: { item: CategoryModel }) => (
    <View style={styles.categoryCard}>
      <View style={styles.categoryIconContainer}>
        <Image
          source={{ uri: category.imageUrl }}
          style={styles.categoryIcon}
          resizeMode="contain"
        />
      </View>
      <Typography customStyle={styles.categoryName} value={category.name} />
    </View>
  );

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
        <FlatList
          data={localCategories}
          renderItem={renderCategory}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.categoriesRow}
          contentContainerStyle={styles.categoriesContainer}
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
