import { Expense as ExpenseModel } from './expense';
import { Category as CategoryModel } from './category';

export type RootStackParamList = {
  Home: undefined;
  AddExpense: { onAddExpense: (expense: ExpenseModel) => void };
  ExpenseDetail: { expense: ExpenseModel; onDeleteExpense: (id: number) => void };
  Categories: undefined;
  AddCategories: { onAddCategory: (category: CategoryModel) => void };
};
