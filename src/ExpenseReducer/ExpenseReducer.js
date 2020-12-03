import React from "react"

export const ExpenseReducer = (state, action)=>{
  switch(action.type)
  {
    case "ADD_TRANSACTION":
      {
        const id =state.length>0?state[state.length - 1].id + 1:1;
        return [...state, {
          id,
purpose:action.purpose,
amount:action.amount
        }]
      }
    case "DELETE_TRANSACTION":
      {
      return state.filter(cur=>cur.id!==action.id);
      }
default:
  return state;
  }
}