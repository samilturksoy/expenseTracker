import { createStyles } from './styles';
import Typography from '../../shared/components/Typography';
import useDarkMode from '../../shared/hooks/useDarkMode';
import HeroBackground from '../../shared/components/heroBackground';
import color from '../../shared/constans/colors';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const AddCategoriesScreen = () => {
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
          <Typography customStyle={styles.headerText} value="Yeni Kategori" />
          <View style={{ width: 70 }} />
        </View>
      </HeroBackground>

      <View style={styles.body}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Typography customStyle={styles.label} value="Kategori Adı" />
            <TextInput
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
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <Typography 
              customStyle={styles.addButtonText} 
              value="Kategori Ekle" 
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddCategoriesScreen;
