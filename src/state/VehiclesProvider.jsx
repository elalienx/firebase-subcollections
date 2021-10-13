// NPM Packages
import { createContext, useContext, useReducer } from "react";

// Proeject file
import vehiclesReducer from "./vehiclesReducer";

// Properties
const VehiclesContext = createContext(null);

export function VehiclesProvider({ children }) {
  // Local state
  const [categories, dispatch] = useReducer(vehiclesReducer, []);

  return (
    <VehiclesContext.Provider value={{ categories, dispatch }}>
      {children}
    </VehiclesContext.Provider>
  );
}

export function useVehicles() {
  const context = useContext(VehiclesContext);

  return context;
}
