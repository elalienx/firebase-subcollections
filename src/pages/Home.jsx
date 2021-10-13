// NPM packages
import { Link } from "react-router-dom";

// Project files
import { useVehicles } from "../state/VehiclesProvider";
import ItemCategory from "../components/ItemCategory";

export default function Home() {
  // Global state
  const { categories } = useVehicles();

  // Components
  const CategoryItems = categories.map((item) => (
    <Link key={item.id} to={`/category/${item.id}`}>
      <ItemCategory item={item} />
    </Link>
  ));

  return (
    <div>
      <h1>Home</h1>
      <ol>{CategoryItems}</ol>
    </div>
  );
}
