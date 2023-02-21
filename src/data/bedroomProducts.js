import importImages from "../utils/importImages";

const images = importImages(
  require.context("../assets/bedroom", false, /\.(png|jpe?g|svg)$/)
);

const bedroomProducts = [
  {
    id: "blaise",
    name: "BLAISE series",
    image: images["blaise.jpg"],
    price: "$3,299.00",
    category: "bedroom",
  },
  {
    id: "kiki",
    name: "KIKI series",
    image: images["kiki.jpg"],
    price: "$2,799.00",
    category: "bedroom",
  },
  {
    id: "mentor",
    name: "MENTOR series",
    image: images["mentor.jpg"],
    price: "$4,999.00",
    category: "bedroom",
  },
  {
    id: "virtual",
    name: "VIRTUAL series",
    image: images["virtual.jpg"],
    price: "$5,000.00",
    category: "bedroom",
  },
];

export default bedroomProducts;
