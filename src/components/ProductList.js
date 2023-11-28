import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useProductContext } from "../context/productcontext";

const ProductList = () => {

  const { filter_products, grid_view } = useProductContext();

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }

  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;
