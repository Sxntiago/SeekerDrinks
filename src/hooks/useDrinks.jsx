import { useContext } from "react";
import DrinksContext from "../context/bebidasProvider";

const useDrinks = () => {
  return useContext(DrinksContext);
};

export default useDrinks;
