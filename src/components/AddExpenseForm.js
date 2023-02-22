import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    console.log("id", expense.id);

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm col-lg-4">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required="required"
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="col-sm col-lg-4">
          <label htmlFor="cost">Cost</label>
          <input
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required="required"
            type="number"
            className="form-control"
            id="cost"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
