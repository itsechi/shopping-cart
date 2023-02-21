function importImages(r) {
  let images = {};
  r.keys().map((item) => (images[item.replace("./", "")] = r(item)));
  return images;
}

const images = importImages(
  require.context("../assets/living", false, /\.(png|jpe?g|svg)$/)
);

const livingProducts = [
  {
    id: "aulani",
    name: "AULANI series",
    image: images["aulani.jpg"],
    price: "$2,599.00",
    category: "living",
  },
  {
    id: "avante",
    name: "AVANTE series",
    image: images["avante.jpg"],
    price: "$7,499.00",
    category: "living",
  },
  {
    id: "driftwood",
    name: "DRIFTWOOD series",
    image: images["driftwood.jpg"],
    price: "$1,299.00",
    category: "living",
  },
  {
    id: "fashio",
    name: "FASHIO series",
    image: images["fashio.jpg"],
    price: "$4,599.00",
    category: "living",
  },
  {
    id: "lintel",
    name: "LINTEL series",
    image: images["lintel.jpg"],
    price: "$2,999.00",
    category: "living",
  },
  {
    id: "viva",
    name: "VIVA series",
    image: images["viva.jpg"],
    price: "$3,999.00",
    category: "living",
  },
];

export default livingProducts;
