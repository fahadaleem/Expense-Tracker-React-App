import React, { useContext } from "react";
import { ExpenseContext } from "../ExpenseContext/ExpenseContext";

const NewTransaction = (props) => {
  const sign = props.amount > 0 ? "+" : "";
  return (
    <div
      className="new-transaction"
      style={
        sign === "+"
          ? { borderRight: "5px solid #1982c4" }
          : { borderRight: "5px solid #ff570a" }
      }
      onClick={()=>props.deleteTransaction({type:"DELETE_TRANSACTION",id:props.id})}
    >
      <button className="delete-btn" onClick={()=>props.deleteTransaction({type:"DELETE_TRANSACTION",id:props.id})}>X</button>
      <h2 className="transaction-name">{props.projectName}</h2>
      <h2 className="transaction-value">
        {sign} ${props.amount}
      </h2>
    </div>
  );
};

const TransactionHistory = () => {
  const { transactions, dispatch } = useContext(ExpenseContext);
  console.log(dispatch);
  // console.log(deleteTransaction)
  return (
    <div className="transaction-history">
      <h1>Transaction History</h1>
      <hr width="40%" style={{ margin: "0 auto", marginTop: "15px" }} />
      {transactions.map((cur) => (
        <NewTransaction
          key={cur.id}
          id={cur.id}
          projectName={cur.purpose}
          amount={cur.amount}
          deleteTransaction={dispatch}
        />
      ))}
    </div>
  );
};

export default TransactionHistory;
