import { createStyles } from './styles';
import Typography from '../../shared/components/Typography';
import useDarkMode from '../../shared/hooks/useDarkMode';
import HeroBackground from '../../shared/components/heroBackground';
import color from '../../shared/constans/colors';
import categoriesData from '../../shared/constans/categories.json';
import { RootStackParamList } from '../../shared/types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Category = {
  name: string;
  imageUrl: string;
};

const CategoriesScreen = () => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);
  const navigation = useNavigation<NavigationProp>();

  const renderCategory = ({ item: category }: { item: Category }) => (
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
          data={categoriesData.categories}
          renderItem={renderCategory}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.categoriesRow}
          contentContainerStyle={styles.categoriesContainer}
        />

        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('AddCategories')}
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
