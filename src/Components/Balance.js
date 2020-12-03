import React, { useContext } from "react"
import {ExpenseContext} from "../ExpenseContext/ExpenseContext"

const Balance = ()=>{
  const {balance} = useContext(ExpenseContext);

  return(
    <div className="transaction-balance">
      <h1>Balance</h1>
      <h2 className="transaction-amount">$ {balance.toLocaleString()}</h2>
      </div>
  )
}

export default Balance