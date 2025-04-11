import { Expense as ExpenseModel } from './expense';
import { Category as CategoryModel } from './category';

export type RootStackParamList = {
  Home: undefined;
  AddExpense: { 
    onAddExpense: (expense: ExpenseModel) => void;
    categories: CategoryModel[];
  };
  ExpenseDetail: { expense: ExpenseModel; onDeleteExpense: (id: number) => void };
  Categories: { 
    categories: CategoryModel[];
    onAddCategory: (category: CategoryModel) => void;
  };
  AddCategories: { onAddCategory: (category: CategoryModel) => void };
};
