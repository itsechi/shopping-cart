import allProducts from "../../data/allProducts";
import createPage from "./createPage";
import { useParams } from "react-router-dom";

const Catalog = () => {
  const routeParams = useParams();
  const products = allProducts.filter(
    (item) => item.category === routeParams.id
  );
  const page = createPage(products, routeParams.id);
  return page;
};

export default Catalog;
