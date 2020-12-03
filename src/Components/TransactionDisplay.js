import React, { useCallback, useContext } from "react";
import {ExpenseContext} from "../ExpenseContext/ExpenseContext"

const TransactionDisplay = () => {

  const {totalIncome, totalExpense} = useContext(ExpenseContext);

  return (
    <div className="transaction-display">
      <div className="income">
        <h1>Income</h1>
        <h2 className="income-value">$ {totalIncome}</h2>
      </div>
      <div className="expense">
        <h1>Expense</h1>
        <h2 className="expense-value">$ {totalExpense}</h2>
      </div>
    </div>
  );
};

export default TransactionDisplay;
