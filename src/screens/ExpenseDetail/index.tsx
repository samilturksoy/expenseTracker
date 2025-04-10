import { createStyles } from './styles';
import Typography from '../../shared/components/Typography';
import useDarkMode from '../../shared/hooks/useDarkMode';
import HeroBackground from '../../shared/components/heroBackground';
import color from '../../shared/constans/colors';
import Balance from '../../shared/components/balance';
import categoriesData from '../../shared/constans/categories.json';
import { useRoute, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';

interface RouteParams {
  expense: {
    id: number;
    title: string;
    amount: number;
    date: string;
    category: string;
    details: string;
  };
}

const ExpenseDetailScreen = () => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);
  const route = useRoute();
  const navigation = useNavigation();
  const { expense } = route.params as RouteParams;

  // Kategori ikonunu bul
  const categoryIcon = categoriesData.categories.find(
    cat => cat.name === expense.category
  )?.imageUrl;

  const handleDelete = () => {
    Alert.alert(
      'Harcama Sil',
      'Bu harcamayı silmek istediğinizden emin misiniz?',
      [
        {
          text: 'İptal',
          style: 'cancel'
        },
        {
          text: 'Sil',
          onPress: () => {
            // Silme işlemi burada yapılacak
            navigation.goBack();
          },
          style: 'destructive'
        }
      ]
    );
  };

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
          <Typography customStyle={styles.headerText} value="Harcama Detayı" />
          <View style={{ width: 70 }} />
        </View>
        <Balance amount={expense.amount} title="Harcama Tutarı" />
      </HeroBackground>

      <View style={styles.body}>
        <View style={styles.card}>
          <View style={styles.categoryContainer}>
            {categoryIcon && (
              <View style={styles.categoryIconContainer}>
                <Image
                  source={{ uri: categoryIcon }}
                  style={styles.categoryIcon}
                  resizeMode="contain"
                />
              </View>
            )}
            <View style={styles.categoryInfo}>
              <Typography customStyle={styles.label} value="Kategori" />
              <Typography customStyle={styles.categoryText} value={expense.category} />
            </View>
          </View>

          <View style={styles.infoRow}>
            <Typography customStyle={styles.label} value="Tarih:" />
            <Typography customStyle={styles.value} value={expense.date} />
          </View>

          <View style={styles.detailsContainer}>
            <Typography customStyle={styles.label} value="Detaylar:" />
            <Typography customStyle={styles.details} value={expense.details} />
          </View>

          <TouchableOpacity 
            style={styles.deleteButton}
            onPress={handleDelete}
          >
            <Typography 
              customStyle={styles.deleteButtonText} 
              value="Harcamayı Sil" 
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExpenseDetailScreen;
