import { createStyles } from './styles';
import Typography from '../../shared/components/Typography';
import useDarkMode from '../../shared/hooks/useDarkMode';
import HeroBackground from '../../shared/components/heroBackground';
import color from '../../shared/constans/colors';
import { RootStackParamList } from '../../shared/types/navigation';
import { Category as CategoryModel } from '../../shared/types/category';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, TextInput, Alert } from 'react-native';


type AddCategoryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type AddCategoryScreenProps = NativeStackScreenProps<RootStackParamList, 'AddCategories'>;

const AddCategoriesScreen = () => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);
  const navigation = useNavigation<AddCategoryScreenNavigationProp>();
  const route = useRoute<AddCategoryScreenProps['route']>();
  const { onAddCategory } = route.params;
  const [categoryName, setCategoryName] = React.useState('');
  const [iconUrl, setIconUrl] = React.useState('');

  const handleAddCategory = () => {
    // Boş alan kontrolü
    if (!categoryName.trim() || !iconUrl.trim()) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun');
      return;
    }

    const newCategory: CategoryModel = {
      id: Date.now(),
      imageUrl: iconUrl.trim(),
      name: categoryName.trim()
    };

    onAddCategory(newCategory);
    navigation.navigate('Home');
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
          <Typography customStyle={styles.headerText} value="Yeni Kategori" />
          <View style={{ width: 70 }} />
        </View>
      </HeroBackground>

      <View style={styles.body}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Typography customStyle={styles.label} value="Kategori Adı" />
            <TextInput
              onChangeText={setCategoryName}
              style={[
                styles.input,
                { color: isDarkMode ? color.neutral.white : color.neutral.black }
              ]}
              placeholderTextColor={isDarkMode ? color.neutral.lightGray : color.neutral.darkGray}
              placeholder="Kategori adını giriniz"
            />
          </View>

          <View style={styles.inputContainer}>
            <Typography customStyle={styles.label} value="İkon URL" />
            <TextInput
              onChangeText={setIconUrl}
              defaultValue='https://cdn-icons-png.flaticon.com/512/1828/1828919.png'
              style={[
                styles.input,
                { color: isDarkMode ? color.neutral.white : color.neutral.black }
              ]}
              placeholderTextColor={isDarkMode ? color.neutral.lightGray : color.neutral.darkGray}
              placeholder="Kategori ikonu için URL giriniz"
            />
          </View>

          <TouchableOpacity 
            style={styles.addButton}
            onPress={handleAddCategory}
          >
            <Typography 
              customStyle={styles.addButtonText} 
              value="Kategori Ekle" 
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddCategoriesScreen;
