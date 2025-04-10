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
  AddExpense: undefined;
  Categories: undefined;
  AddCategories: undefined;
  ExpenseDetail: {
    expense: Expense;
  };
};
