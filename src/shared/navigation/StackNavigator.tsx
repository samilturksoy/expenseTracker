import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../../screens';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={screens.Home} />
        <Stack.Screen name="AddExpense" component={screens.AddExpense} />
        <Stack.Screen name="Categories" component={screens.Categories} />
        <Stack.Screen name="AddCategories" component={screens.AddCategories} />
        <Stack.Screen name="ExpenseDetail" component={screens.ExpenseDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

