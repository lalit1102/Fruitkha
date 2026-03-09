import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../assets/assets';
import { useCart } from '../context/CartContext';
import { getProductUnit } from '../utils/helpers';
import './Shop.css';

const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Beverages', 'Snacks', 'Bakery', 'Seafood', 'Meat'];

const Shop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Check URL params to determine active category, defaulting to 'All'
  const selectedCategory = id
    ? categories.find(c => c.toLowerCase() === id.toLowerCase()) || 'All'
    : 'All';

  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (category) => {
    if (category === 'All') {
      navigate('/shop');
    } else {
      navigate(`/shop/category/${category.toLowerCase()}`);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-5 mt-5 pb-5 bg-light min-vh-100">
      <Container className="pt-4">

        {/* Header Section: Title, Categories, and Search */}
        <div className="mb-4 pb-3 border-bottom d-flex flex-column gap-3">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3">
            <div>
              <h2 className="fw-bold mb-3">All Products</h2>
              <div className="d-flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'success' : 'outline-secondary'}
                    className="rounded-pill px-3 py-1 btn-sm fw-semibold"
                    style={{ transition: 'all 0.2s', borderWidth: '1.5px' }}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div style={{ maxWidth: '300px', width: '100%' }}>
              <InputGroup className="shadow-sm rounded-pill overflow-hidden bg-white">
                <InputGroup.Text className="bg-white border-0 ps-3">
                  <i className="fas fa-search text-muted"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search products..."
                  className="border-0 shadow-none py-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </InputGroup>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-5">
            <h4 className="text-muted">No products found matching your criteria.</h4>
          </div>
        ) : (
          <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
            {filteredProducts.map((product) => (
              <Col key={product.id}>
                <Card
                  className="h-100 border-0 shadow-sm product-card overflow-hidden"
                  style={{ borderRadius: '16px', cursor: 'pointer' }}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <div className="position-relative bg-white d-flex justify-content-center align-items-center p-4" style={{ height: '180px' }}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.name}
                      className="product-image-modern p-2"
                      style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                    />
                    <span className="position-absolute top-0 start-0 m-3 py-1 px-2 badge bg-danger rounded-1" style={{ fontSize: '10px' }}>
                      10% OFF
                    </span>
                  </div>
                  <Card.Body className="d-flex flex-column p-3 bg-white" style={{ borderTop: '1px solid #f1f2f6' }}>
                    <span className="text-muted text-uppercase fw-semibold mb-1" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>
                      {product.category}
                    </span>
                    <Card.Title className="fw-bold mb-1 text-truncate" style={{ fontSize: '16px', color: '#282c3f' }}>
                      {product.name}
                    </Card.Title>
                    <Card.Text className="text-muted mb-2" style={{ fontSize: '13px' }}>
                      {getProductUnit(product)}
                    </Card.Text>
                    <div className="d-flex align-items-center mb-3">
                      <span className="fw-bold fs-5 text-dark">₹{product.price}</span>
                      <span className="text-muted text-decoration-line-through ms-2" style={{ fontSize: '13px' }}>
                        ₹{Math.round(product.price * 1.1)}
                      </span>
                    </div>
                    <Button
                      variant="outline-success"
                      className="w-100 rounded-pill fw-bold mt-auto add-to-cart-btn d-flex justify-content-center align-items-center gap-2 py-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                    >
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Shop;