import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategory from "../hooks/useCategory";
import { useState } from "react";
import useDrinks from "../hooks/useDrinks";

const Formulario = () => {
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });
  const [alert, setAlert] = useState("");
  const { seekerDrink } = useDrinks();
  const { categories } = useCategory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("All fields are required");
      return;
    }
    setAlert("");
    seekerDrink(search);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alert && (
        <Alert variant='danger' className='text-center'>
          {alert}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor='name'>Drink Name</Form.Label>
            <Form.Control
              value={search.name}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
              id='name'
              name='name'
              type='text'
              placeholder='Tequila, Vodka, etc'
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor='category'>Category</Form.Label>
            <Form.Select
              value={search.category}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
              id='category'
              name='category'
            >
              <option>-Choose category-</option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className='justify-content-end'>
        <Col md={3}>
          <Button
            type='submit'
            variant='danger'
            className='text-uppercase w-100 mt-3'
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
