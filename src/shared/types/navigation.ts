import { Expense as ExpenseModel } from './expense';

export type Expense = {
  id: number;
  title: string;
  amount: number;
  date: string;
  category: string;
  details: string;
};

export type RootStackParamList = {
  Home: undefined;
  AddExpense: { onAddExpense: (expense: ExpenseModel) => void };
  ExpenseDetail: { expense: ExpenseModel };
  Categories: undefined;
  AddCategories: undefined;
};
