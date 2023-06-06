import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { CategoryProvider } from "./context/category.provider";
import { DrinksProvider } from "./context/bebidasProvider";
import DrinksList from "./components/DrinksList";
import DrinkModal from "./components/DrinkModal";

function App() {
  return (
    <CategoryProvider>
      <DrinksProvider>
        <header className='py-5'>
          <h1>Seeker Drinks</h1>
        </header>
        <Container className='mt-5'>
          <Formulario />
          <DrinksList />
          <DrinkModal />
        </Container>
      </DrinksProvider>
    </CategoryProvider>
  );
}

export default App;
