import { createStyles } from './styles';
import Typography from '../../shared/components/Typography';
import useDarkMode from '../../shared/hooks/useDarkMode';
import HeroBackground from '../../shared/components/heroBackground';
import color from '../../shared/constans/colors';
import categoriesData from '../../shared/constans/categories.json';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';

const CategoriesScreen = () => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: color.main.blue}} bounces={false}>
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
        <View style={styles.categoriesContainer}>
          {categoriesData.categories.map((category, index) => (
            <View key={index} style={styles.categoryCard}>
              <View style={styles.categoryIconContainer}>
                <Image
                  source={{ uri: category.imageUrl }}
                  style={styles.categoryIcon}
                  resizeMode="contain"
                />
              </View>
              <Typography customStyle={styles.categoryName} value={category.name} />
            </View>
          ))}
        </View>

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
    </ScrollView>
  );
};

export default CategoriesScreen;
