import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  console.log("filteredExpense", filteredExpenses);
  console.log("expenses", expenses);

  const handleChange = (event) => {
    const serchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setFilteredExpenses(serchResults);
  };

  return (
    <>
      <input
        onChange={handleChange}
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
      />
      <ul className="list-group mt-3 mb-3">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
