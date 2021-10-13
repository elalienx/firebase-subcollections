// NPM Packages
import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Browser from "./components/Browser";
import { getCollection } from "./scripts/firestore";
import { useVehicles } from "./state/VehiclesProvider";

export default function App() {
  // Global state
  const { dispatch } = useVehicles();

  // Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const data = await getCollection(path);

      dispatch({ type: "SET_VEHICLES", payload: data });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => {
    fetchData("vehicles");
  }, [fetchData]);

  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <Browser />}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
