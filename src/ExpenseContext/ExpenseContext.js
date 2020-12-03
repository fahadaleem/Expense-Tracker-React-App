import React, { Component, createContext, useEffect, useState, useReducer } from "react";
import {ExpenseReducer} from "../ExpenseReducer/ExpenseReducer"
export const ExpenseContext = createContext();

export const ExpenseContextProvider = (props) => {
  const [transactions, dispatch] = useReducer(ExpenseReducer,[], ()=>{
const storedValues = localStorage.getItem("transactions");
return storedValues?JSON.parse(storedValues):[];
  });
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  // Balance
  const [balance, setBalance] = useState(0);

  // Calculate Budget
  const calcBudget = () => {
    let sum = 0;
    transactions.forEach((cur) => (sum += cur.amount));
    setBalance(sum);
  };

  // Calculate Income
  const calcIncome = () => {
    let sum = 0;
    transactions.forEach((cur) => {
      if (cur.amount > 0) {
        sum += cur.amount;
      }
    });
    setTotalIncome(sum);
  };

  // Calculate Expense
  const calcExpense = () => {
    let sum = 0;
    transactions.forEach((cur) => {
      if (cur.amount < 0) {
        sum += Math.abs(cur.amount);
      }
    });
    setTotalExpense(sum);
  };

 
  useEffect(() => {
    calcBudget();
    calcIncome();
    calcExpense();
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <ExpenseContext.Provider
      value={{
        transactions,
        balance,
        totalExpense,
        totalIncome,
        dispatch
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};
