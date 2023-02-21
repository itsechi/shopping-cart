import importImages from "../utils/importImages";

const images = importImages(
  require.context("../assets/dining", false, /\.(png|jpe?g|svg)$/)
);

const diningProducts = [
  {
    id: "materia",
    name: "MATERIA series",
    image: images["materia.jpg"],
    price: "$2,599.00",
    category: "dining",
  },
  {
    id: "ondeo",
    name: "ONDEO series",
    image: images["ondeo.jpg"],
    price: "$5,999.00",
    category: "dining",
  },
  {
    id: "steedy",
    name: "STEEDY series",
    image: images["steedy.jpg"],
    price: "$4,599.00",
    category: "dining",
  },
];

export default diningProducts;
