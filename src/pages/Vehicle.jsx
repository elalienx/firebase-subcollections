// NPM package
import { useParams } from "react-router-dom";

export default function Vehicle() {
  // Global state
  const { vehicleId } = useParams();

  return (
    <div>
      <h1>Vehicle @{vehicleId}@</h1>
    </div>
  );
}
