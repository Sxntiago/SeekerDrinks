import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [idDrink, setIdDrink] = useState(null);
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getRecipe = async () => {
      if (!idDrink) return;
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
        const { data } = await axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getRecipe();
  }, [idDrink]);

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleDrinkId = (id) => {
    setIdDrink(id);
  };

  const seekerDrink = async (data) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data.name}&c=${data.category}`;
      const { data: results } = await axios(url);
      setDrinks(results.drinks);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <DrinksContext.Provider
      value={{
        modal,
        recipe,
        drinks,
        loading,
        handleDrinkId,
        handleModalClick,
        seekerDrink,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };

export default DrinksContext;
