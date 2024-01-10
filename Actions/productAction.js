import {
  ImageAPIAction,
  performAPIAction,
  performGetAPIAction,
} from "./performAPIAction";

export const getProductByCategories = async (slug, query) => {
  const params = new URLSearchParams(query);
  const url = `http://localhost:8000/api/v1/first-website/product/get-product-by-categories/${slug}?${params}`;
  return performGetAPIAction(url);
};
