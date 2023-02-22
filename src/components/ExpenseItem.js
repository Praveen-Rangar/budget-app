import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteClick = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div className="w-25 d-flex justify-content-between align-items-center">
        <span type="button">Rs.{props.cost}</span>

        <TiDelete onClick={handleDeleteClick} size="1.5em" />
      </div>
    </li>
  );
};

export default ExpenseItem;
