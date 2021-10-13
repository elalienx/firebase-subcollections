// NPM package
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

// Project files
import ItemVehicle from "../components/ItemVehicle";
import { getCollection } from "../scripts/firestore";
import { useDealership } from "../state/DealershipProvider";

export default function Category() {
  // Global state
  const { categories, dispatch2 } = useDealership();
  const { categoryId } = useParams();

  // Local state
  const [vehicles, setVehicles] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const category = categories.find((item) => item.id === categoryId);
  const path = `vehicles/${categoryId}/content`;

  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const vehicles = await getCollection(path);

      setVehicles(vehicles);
      dispatch2({ type: "SET_VEHICLES", payload: vehicles });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => fetchData(path), [fetchData]);

  // Components
  const Categories = vehicles.map((item) => (
    <ItemVehicle key={item.id} item={item} to={`/vehicle/${item.id}`} />
  ));

  return (
    <div>
      <h1>{category.name}</h1>
      <p>{category.description}</p>

      {/* Dynamic content that comes from this page fetch */}
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <ol>{Categories}</ol>}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
