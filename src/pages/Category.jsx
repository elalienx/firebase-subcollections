// NPM package
import { useParams } from "react-router-dom";

// Project files
import { useVehicles } from "../state/VehiclesProvider";

export default function Category() {
  // Global state
  const { vehicles } = useVehicles();
  const { id } = useParams();
  const category = vehicles.find((item) => item.id === id);

  console.log(category);

  return (
    <div>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
    </div>
  );
}
