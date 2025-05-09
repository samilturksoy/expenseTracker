import { Expense as ExpenseModel } from './expense';
import { Category as CategoryModel } from './category';

export type RootStackParamList = {
  Home: {
    action?: 'deleteExpense';
    expenseId?: number;
  };
  AddExpense: { 
    onAddExpense: (expense: ExpenseModel) => void;
    categories: CategoryModel[];
  };
  ExpenseDetail: { 
    expense: ExpenseModel; 
    onDeleteExpense: (id: number) => void;
    categories: CategoryModel[];
  };
  Categories: { 
    categories: CategoryModel[];
    onAddCategory: (category: CategoryModel) => void;
    expenses?: ExpenseModel[];
  };
  AddCategories: { onAddCategory: (category: CategoryModel) => void };
  CategoryExpenseList: { 
    category: CategoryModel; 
    expenses: ExpenseModel[]; 
    onDeleteExpense?: (id: number) => void;
    categories: CategoryModel[];
  };
};
