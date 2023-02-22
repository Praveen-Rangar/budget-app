import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./viewBudget";

const Budget = () => {
  const [inputOn, setInputOn] = useState(false);
  const { dispatch, budget } = useContext(AppContext);

  const handleEditClick = () => {
    setInputOn(true);
  };

  const handleSaveClick = (money) => {
    dispatch({
      type: "INPUT_CHNAGE_ACTION",
      payload: money,
    });
    setInputOn(false);
  };

  console.log("inputOn", inputOn);

  return (
    <div className="alert d-flex alert-secondary  justify-content-between">
      {inputOn ? (
        <EditBudget handleSaveClick={handleSaveClick} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
