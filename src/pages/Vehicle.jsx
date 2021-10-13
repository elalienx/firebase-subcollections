// NPM package
import { useParams, Link } from "react-router-dom";

// Project file
import { useDealership } from "../state/DealershipProvider";

export default function Vehicle() {
  // Global state
  const { categories, vehicleId } = useParams();
  const { vehicles } = useDealership();

  // Properties
  const vehicle = vehicles.find((item) => item.id === vehicleId);

  // Components
  const ErrorComponent = (
    <p>
      Something happen please go to the home page and try again{" "}
      <Link to="/">Go home</Link>
    </p>
  );

  if (vehicle === undefined) return ErrorComponent;

  return (
    <div>
      <img src={vehicle.imageURL} alt="Vehicle thumbail" />
      <h1>{vehicle.name}</h1>
      <p>Starting price: ${vehicle.price} MSRSP</p>
    </div>
  );
}
