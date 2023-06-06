import { useContext } from "react";
import CategoryContext from "../context/category.provider";

const useCategory = () => {
  return useContext(CategoryContext);
};

export default useCategory;
