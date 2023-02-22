import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary p-4">
      <span>Spent so far: Rs.{totalExpense}</span>
    </div>
  );
};

export default ExpenseTotal;
