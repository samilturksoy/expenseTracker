import { styles } from './styles';
import Typography from '../../../../shared/components/Typography';
import useDarkMode from '../../../../shared/hooks/useDarkMode';
import { Expense } from '../../../../shared/types/expense';
import { Category } from '../../../../shared/types/category';
import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

interface ExpenseItemProps {
  item: Expense;
  onPress: () => void;
  categories: Category[];
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ item, onPress, categories }) => {
  const { isDarkMode } = useDarkMode();
  const itemStyles = styles(isDarkMode);

  // Kategori ikonunu bul
  const categoryIcon = categories.find(
    cat => cat.name === item.category
  )?.imageUrl;

  return (
    <TouchableOpacity style={itemStyles.container} onPress={onPress}>
      <View style={itemStyles.leftContainer}>
        <View style={itemStyles.iconContainer}>
          <Image
            source={{ uri: categoryIcon }}
            style={itemStyles.icon}
            resizeMode="contain"
          />
        </View>
        <View style={itemStyles.infoContainer}>
          <Typography customStyle={itemStyles.title} value={item.title} />
          <Typography customStyle={itemStyles.category} value={item.category} />
        </View>
      </View>
      <View style={itemStyles.rightContainer}>
        <Typography customStyle={itemStyles.amount} value={`${item.amount} TL`} />
        <Typography customStyle={itemStyles.date} value={item.date} />
      </View>
    </TouchableOpacity>
  );
};

export default ExpenseItem; 