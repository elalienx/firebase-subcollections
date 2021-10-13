// NPM Packages
import { createContext, useContext, useReducer } from "react";

// Proeject files
import categoriesReducer from "./categoriesReducer";
import vehicleReducer from "./vehicleReducer";

// Properties
const DealerShipContext = createContext(null);

export function DealershipProvider({ children }) {
  // Local state
  const [categories, dispatch] = useReducer(categoriesReducer, []);
  const [vehicle, dispatch2] = useReducer(vehicleReducer, []); // hold the specific document

  return (
    <DealerShipContext.Provider
      value={{ categories, vehicle, dispatch, dispatch2 }}
    >
      {children}
    </DealerShipContext.Provider>
  );
}

export function useDealership() {
  const context = useContext(DealerShipContext);

  return context;
}
