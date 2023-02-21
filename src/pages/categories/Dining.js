import diningProducts from "../../data/diningProducts";
import createPage from "../../utils/createPage";

function Dining() {
  const diningPage = createPage(diningProducts, "Dining");
  return diningPage;
}

export default Dining;
