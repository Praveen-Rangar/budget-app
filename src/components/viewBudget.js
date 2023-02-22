import React from "react";

const ViewBudget = (props) => {
  return (
    <>
      <span>Budget: Rs.{props.budget}</span>
      <button
        onClick={props.handleEditClick}
        type="button"
        className="btn btn-primary"
      >
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
