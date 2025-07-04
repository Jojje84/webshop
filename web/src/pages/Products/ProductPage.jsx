import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import styled from 'styled-components';
import { useCart } from '../../contexts/CartContext';
import { useStock } from '../../contexts/StockContext';
import { imageMap } from '../../utils/imageMap';
import { useNavigate } from 'react-router-dom';

const Container = styled.div``;

const BackButton = styled.button`
  margin: 10px;
  padding: 6px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 20px;
    gap: 10px;
  }
`;

const ImgContainer = styled.img`
  width: 50%;
  height: 50vh;
  object-fit: cover;

   @media (max-width: 700px) {
    width: 100%;
    height: auto;
    max-height: 300px;
    border-radius: 10px;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

    @media (max-width: 700px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const StockAmount = styled.div`
  font-weight: 100;
  font-size: 20px;
  color: gray;
  font-weight: 400;
  margin: 20px 0px;
`;

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;

    @media (max-width: 700px) {
    width: 100%;
    align-items: center;
  }
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  justify-content: center;
`;

const RemoveIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  background-color: lightgray;
  border-radius: 5px;
  margin-right: 10px;
  user-select: none;
`;

const AddIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  background-color: lightgray;
  border-radius: 5px;
  margin-left: 10px;
  user-select: none;
`;

const Amount = styled.span`
  font-size: 24px;
  margin: 0 10px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid ${(props) => (props.$outOfStock ? 'darkred' : 'green')};
  background-color: ${(props) => (props.$outOfStock ? 'red' : 'green')};
  color: white;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0 0 0;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${(props) => (props.$outOfStock ? 'darkred' : 'darkgreen')};
  }
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { getStockById } = useStock();
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === parseInt(id));
    setProduct(foundProduct);

    if (foundProduct) {
      const categoryKey = foundProduct.category.toLowerCase();
      const imageKey = foundProduct.image.endsWith('.png')
        ? foundProduct.image
        : `${foundProduct.image}.png`;
      const image = imageMap[categoryKey]?.[imageKey] || '';
      setImageUrl(image);
    }
  }, [id]);

  useEffect(() => {
    setQuantity(1);
  }, [id]);

  const handleQuantityChange = (change) => {
    if (!product) return;
    const newQuantity = quantity + change;
    const stockAvailable = getStockById(product.id);
    if (newQuantity >= 1 && newQuantity <= stockAvailable) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      if (quantity <= getStockById(product.id)) {
        addToCart(product, quantity);
      
      } else {
        alert('Inte tillräckligt med lager!');
      }
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }
  const isOutOfStock = getStockById(product.id) === 0;

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
      <Wrapper>
        <ImgContainer src={imageUrl} alt={product.name} />
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>{product.description}</Desc>
          <Price>${product.price}</Price>
          <StockAmount>Stock:{getStockById(product.id)}</StockAmount>

          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={() => handleQuantityChange(-1)}>-</RemoveIcon>
              <Amount>{quantity}</Amount>
              <AddIcon onClick={() => handleQuantityChange(1)}>+</AddIcon>
            </AmountContainer>
            <Button onClick={handleAddToCart} disabled={isOutOfStock} $outOfStock={isOutOfStock}>
              {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductPage;
