const { createContext, useReducer } = require("react");

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "INPUT_CHNAGE_ACTION":
      return { ...state, budget: action.payload };
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "Shopping", cost: 40 },
    { id: 13, name: "Holiday", cost: 50 },
    { id: 14, name: "car services", cost: 60 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
