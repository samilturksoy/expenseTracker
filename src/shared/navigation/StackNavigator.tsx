import screens from '../../screens';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Create a stack navigator
const RootStack = createNativeStackNavigator({
  screenOptions:{
    headerShown: false,
    animation: 'fade'
  },
  screens: {    
    Home: screens.Home,
    AddCategories: screens.AddCategories,
    AddExpense: screens.AddExpense,
    ExpenseDetail: screens.ExpenseDetail
  }
  
});

const StackNavigator = createStaticNavigation(RootStack);

export default StackNavigator;

