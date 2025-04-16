import { createStyles } from './styles';
import Typography from '../../shared/components/Typography';
import useDarkMode from '../../shared/hooks/useDarkMode';
import HeroBackground from '../../shared/components/heroBackground';
import color from '../../shared/constans/colors';
import categoriesData from '../../shared/constans/categories.json';
import { RootStackParamList } from '../../shared/types/navigation';
import { useRoute, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RouteProp = NativeStackScreenProps<RootStackParamList, 'ExpenseDetail'>['route'];

const ExpenseDetailScreen = () => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);
  const route = useRoute<RouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { expense, onDeleteExpense } = route.params;

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
            onDeleteExpense(expense.id);
            navigation.goBack();
          },
          style: 'destructive'
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
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

          <View style={styles.amountContainer}>
            <Typography customStyle={styles.amountLabel} value="Harcama Tutarı" />
            <Typography 
              customStyle={styles.amount} 
              value={`${expense.amount.toLocaleString('tr-TR')} TL`} 
            />
          </View>
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
                <Typography customStyle={styles.categoryLabel} value="Kategori" />
                <Typography customStyle={styles.categoryText} value={expense.category} />
              </View>
            </View>

            <View style={styles.infoSection}>
              <Typography customStyle={styles.infoLabel} value="Başlık" />
              <Typography customStyle={styles.infoValue} value={expense.title} />
            </View>

            <View style={styles.infoSection}>
              <Typography customStyle={styles.infoLabel} value="Tarih" />
              <Typography customStyle={styles.infoValue} value={expense.date} />
            </View>

            <View style={styles.infoSection}>
              <Typography customStyle={styles.infoLabel} value="Detaylar" />
              <Typography customStyle={styles.infoValue} value={expense.details} />
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
    </View>
  );
};

export default ExpenseDetailScreen;
