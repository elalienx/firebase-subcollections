// NPM Package
import { Link } from "react-router-dom";

export default function ItemVehicle({ item, to }) {
  const { name, imageURL, price } = item;

  return (
    <li>
      <img src={imageURL} alt="Vehicle thumbnail" />
      <h2>{name}</h2>
      <Link className="button" to={to}>
        View vehicle
      </Link>
      <hr />
      <br />
    </li>
  );
}
