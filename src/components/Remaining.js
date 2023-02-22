import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const RemainingBudget = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType =
    totalExpense > budget
      ? "alert alert-danger p-4"
      : "alert alert-success p-4";

  return (
    <div className={alertType}>
      <span>Remaining: Rs.{budget - totalExpense}</span>
    </div>
  );
};

export default RemainingBudget;
