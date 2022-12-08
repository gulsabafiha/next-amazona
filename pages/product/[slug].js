import { useRouter } from "next/router";
import React from "react";
import data from "../../utils/data";

const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug == slug);
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return <div>{product.name}</div>;
};

export default ProductScreen;
