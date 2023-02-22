import React, { useState } from "react";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);

  return (
    <>
      <input
        required="required"
        type="number"
        class="form-control mr-3"
        id="name"
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        onClick={() => props.handleSaveClick(value)}
        type="button"
        className="btn btn-primary"
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
