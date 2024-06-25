import React, { useState } from 'react';
import { PRODUCTS } from '../app/shared/PRODUCTS';
import { Row, Col } from 'reactstrap';

const ProductList = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
/* doing the condition for the product filtering*/
  const filteredProducts = categoryFilter === "All"
    ? PRODUCTS
    : PRODUCTS.filter(product => product.category === categoryFilter);

  return (
    <div>
      <div className="mb-4"> {/*the buttons for product filtering*/}
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter("All")}>Todo</button>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter("Consulta")}>Consulta</button>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter("Diseño")}>Diseño</button>
        <button className="btn btn-primary me-2" onClick={() => setCategoryFilter("Pintura")}>Pintura</button>
      </div>
      <Row> {/*The .map and the card for rendering the product list*/}
        {filteredProducts.map(product => (
          <Col md="3" key={product.id} className="mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Price:</strong> {product.price}</p>
                <p className="card-text"><strong>Category:</strong> {product.category}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;