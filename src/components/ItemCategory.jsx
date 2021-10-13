export default function ItemCategory({ item }) {
  const { description, imageURL, name } = item;

  return (
    <li>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={imageURL} alt="Category thumbnail" />
    </li>
  );
}
