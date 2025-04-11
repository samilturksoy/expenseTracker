import { Expense as ExpenseModel } from './expense';

//TODO burada sanki side effeckt oluşturuyorum refactor edilmeli
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
  ExpenseDetail: { expense: ExpenseModel; onDeleteExpense: (id: number) => void };
  Categories: undefined;
  AddCategories: undefined;
};
