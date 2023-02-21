import livingProducts from "../../data/livingProducts";
import createPage from "../../utils/createPage";

function Living() {
  const livingPage = createPage(livingProducts, "Living");
  return livingPage;
}

export default Living;
