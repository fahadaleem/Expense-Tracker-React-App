import React from "react";
import "./styles.css";
import Header from "./Components/Header"
import Balance from "./Components/Balance"
import TransactionDisplay from "./Components/TransactionDisplay"
import TransactionHistory from "./Components/TransactionHistory"
import AddNewTransaction from "./Components/AddNewTransaction"
import {ExpenseContextProvider} from "./ExpenseContext/ExpenseContext"


export default function App() {
  return (

    <div className="App">
    <ExpenseContextProvider>
    <Header />
    <Balance />
    <TransactionDisplay />
    <TransactionHistory />
    <AddNewTransaction />
    </ExpenseContextProvider>
    </div>
  );
}
