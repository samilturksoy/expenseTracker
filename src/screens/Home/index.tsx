import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { createStyles } from './styles';
import Typography from '../../shared/components/Typography';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import useDarkMode from '../../shared/hooks/useDarkMode';
import HeroBackground from '../../shared/components/heroBackground';
import color from '../../shared/constans/colors';
import NavBar from './Components/navBar';
import Balance from '../../shared/components/balance';
import CategoriesSlider from '../../shared/components/categoriesSlider';
import ExpensesList from './Components/expensesList';
import { RootStackParamList } from '../../shared/types/navigation';

export type Expense = {
  id: number;
  title: string;
  amount: number;
  date: string;
  category: string;
  details: string;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const { isDarkMode } = useDarkMode();
  const styles = createStyles(isDarkMode);
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{flex: 1, backgroundColor: color.main.blue}}>
      <HeroBackground>
        <NavBar />
        <Balance amount={1250} title="Toplam Harcama" />
      </HeroBackground>

      <View style={styles.body}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Typography customStyle={styles.sectionTitle} value="Kategoriler" />
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <Typography customStyle={styles.seeAllButton} value="Tümünü Gör" />
            </TouchableOpacity>
          </View>
          <CategoriesSlider />
        </View>

        <View style={[styles.section, { flex: 1 }]}>
          <View style={styles.sectionHeader}>
            <Typography customStyle={styles.sectionTitle} value="Son Harcamalar" />
          </View>
          <ExpensesList />
        </View>

        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('AddExpense')}
        >
          <Typography 
            customStyle={styles.addButtonText} 
            value="+ Yeni Harcama Ekle" 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
