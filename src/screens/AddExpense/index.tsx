import { createStyles } from './styles';
import Typography from '../../shared/components/Typography';
import useDarkMode from '../../shared/hooks/useDarkMode';
import HeroBackground from '../../shared/components/heroBackground';
import color from '../../shared/constans/colors';
import CategoriesSlider from '../../shared/components/categoriesSlider';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const AddExpenseScreen = () => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>();

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
          <Typography customStyle={styles.headerText} value="Yeni Harcama" />
          <View style={{ width: 70 }} />
        </View>
      </HeroBackground>

      <View style={styles.body}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Typography customStyle={styles.label} value="Harcama Tutarı" />
            <TextInput
              style={[
                styles.input,
                { color: isDarkMode ? color.neutral.white : color.neutral.black }
              ]}
              placeholderTextColor={isDarkMode ? color.neutral.lightGray : color.neutral.darkGray}
              placeholder="0.00 TL"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Typography customStyle={styles.label} value="Kategori" />
            <CategoriesSlider 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </View>

          <View style={styles.inputContainer}>
            <Typography customStyle={styles.label} value="Detaylar" />
            <TextInput
              style={[
                styles.input,
                styles.textArea,
                { color: isDarkMode ? color.neutral.white : color.neutral.black }
              ]}
              placeholderTextColor={isDarkMode ? color.neutral.lightGray : color.neutral.darkGray}
              placeholder="Harcama detaylarını giriniz"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <Typography 
              customStyle={styles.addButtonText} 
              value="Harcama Ekle" 
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddExpenseScreen;
