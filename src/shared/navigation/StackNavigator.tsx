import screens from '../../screens';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create a stack navigator
const RootStack = createNativeStackNavigator({
  screens: {
    Home: screens.Home,
    AddCategories: screens.AddCategories,
    AddExpense: screens.AddExpense,
    ExpenseDetail: screens.ExpenseDetail,
    Categories : screens.Categories,
    CategoryExpenseList:screens.CategoryExpenseList,
  },
  screenOptions: {
    headerShown: false
  }
});

const StackNavigator = createStaticNavigation(RootStack);

export default StackNavigator;

