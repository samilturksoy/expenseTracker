import { createStyles } from './styles';
import { RootStackParamList } from '../../shared/types/navigation';
import Typography from '../../shared/components/Typography';
import useDarkMode from '../../shared/hooks/useDarkMode';
import HeroBackground from '../../shared/components/heroBackground';
import color from '../../shared/constans/colors';
import CategoriesSlider from '../../shared/components/categoriesSlider';
import { Expense as ExpenseModel } from '../../shared/types/expense';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

type AddExpenseScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddExpense'>;
type AddExpenseScreenProps = NativeStackScreenProps<RootStackParamList, 'AddExpense'>;

const AddExpenseScreen = () => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);
  const navigation = useNavigation<AddExpenseScreenNavigationProp>();
  const route = useRoute<AddExpenseScreenProps['route']>();
  const { onAddExpense, categories } = route.params;
  
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [details, setDetails] = useState('');

  const handleAddExpense = () => {
    // Boş alan kontrolü
    if (!title.trim() || !amount.trim() || !selectedCategory || !details.trim()) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun');
      return;
    }

    // Sayısal değer kontrolü
    if (isNaN(Number(amount)) || Number(amount) <= 0) {
      Alert.alert('Hata', 'Harcama tutarı sadece pozitif rakam olmalıdır');
      return;
    }

    const newExpense: ExpenseModel = {
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
      date: new Date().toISOString().split('T')[0],
      category: selectedCategory,
      details: details.trim()
    };

    onAddExpense(newExpense);
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, backgroundColor: color.main.blue}}>
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
            <Typography customStyle={styles.label} value="Başlık" />
            <TextInput
              style={[
                styles.input,
                { color: isDarkMode ? color.neutral.white : color.neutral.black }
              ]}
              placeholderTextColor={isDarkMode ? color.neutral.lightGray : color.neutral.darkGray}
              placeholder="Harcama başlığını giriniz"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View style={styles.inputContainer}>
            <Typography customStyle={styles.label} value="Tutar" />
            <TextInput
              style={[
                styles.input,
                { color: isDarkMode ? color.neutral.white : color.neutral.black }
              ]}
              placeholderTextColor={isDarkMode ? color.neutral.lightGray : color.neutral.darkGray}
              placeholder="Harcama tutarını giriniz"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.section}>
            <Typography customStyle={styles.sectionTitle} value="Kategori Seç" />
            <CategoriesSlider 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              mode="selection"
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
              value={details}
              onChangeText={setDetails}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity 
            style={styles.addButton}
            onPress={handleAddExpense}
          >
            <Typography 
              customStyle={styles.addButtonText} 
              value="Harcama Ekle" 
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddExpenseScreen;
