import { Button, Card, Col } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

const Drink = (drink) => {
  const { handleModalClick, handleDrinkId } = useDrinks();
  const { strDrink, strDrinkThumb, idDrink } = drink.drink;
  return (
    <Col md={6} lg={3}>
      <Card className='mb-4'>
        <Card.Img
          variant='top'
          src={strDrinkThumb}
          alt={`Image from api of ${strDrink}`}
        />
        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>
          <Button
            onClick={() => {
              handleModalClick();
              handleDrinkId(idDrink);
            }}
            className='w-100 text-uppercase mt-2'
            variant={"warning"}
          >
            see recipe
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Drink;
