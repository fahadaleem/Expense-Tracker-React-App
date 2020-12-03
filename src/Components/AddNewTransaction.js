import React, { useContext, useState } from "react"
import {ExpenseContext} from "../ExpenseContext/ExpenseContext"

const AddNewTransaction = ()=>{

  const {addNewTransaction, dispatch} = useContext(ExpenseContext);

  const [purpose, setPurpose] = useState('');
  const [amount, setAmount] = useState('');
  const addTransaction = (e)=>{
    e.preventDefault();
    dispatch({
      type:"ADD_TRANSACTION",
      purpose,
      amount:parseFloat(amount)
    })
    // addNewTransaction(purpose,parseFloat(amount));
    setPurpose('');
    setAmount('');

  }
  

  return(
    <form className="add-new-transaction" onSubmit={addTransaction}>
    <h1>Add New Transaction</h1>
    <hr width="40%" style={{margin:"0 auto",marginTop:"15px"}}/>
    <div>
      <label>Enter transaction purpose</label>
      <input type="text" id="transaction-purpose" required className="input-transaction" name="purpose" value={purpose} onChange={(e)=>setPurpose(e.target.value)}/> 
      </div>
      <div>
      <label>Enter transaction add - for expense or + for income</label>
      <input type="number" id="transaction-amount" required className="input-transaction" name="amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/> 
      </div>
      <button type="submit" id="submit-btn" >Add Transaction </button>
    </form>
  )
}

export default AddNewTransaction