import React from 'react';
import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge'; // Importera Badge från MUI

const NavbarContainer = styled.nav`
  height: 60px;
  margin-bottom: 20px;
  background-color: #333;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
`;

const Left = styled.div`
  flex-basis: 35%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding-left: 30px;
`;

const Center = styled.div`
  flex-basis: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 15px;
  background-color: white;
`;

const Input = styled.input`
  border: none;
  margin: 10px;
  border-radius: 20px;
  width: 200px;
`;

const Right = styled.div`
  flex-basis: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  margin-right: 30px;
`;

const Cart = styled.div`
  margin-left: 20px;
`;

const Navbar = () => {
  const { cart } = useCart();

  // Beräkna totalt antal produkter i varukorgen
  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <NavbarContainer>
      <Wrapper>
        <Left>
          <Link to="/" style={{ color: 'white', marginRight: '20px' }}>HOME</Link>
          <Link to="/categories" style={{ color: 'white', marginRight: '20px' }}>Categories</Link>
          <Link to="/contact" style={{ color: 'white' }}>CONTACT</Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 20 }} />
          </SearchContainer>
        </Center>
        <Right>
          <Link to="/login" style={{ color: 'white', marginRight: '20px' }}>LOG IN</Link>
          <Cart>
            <Link to="/cart" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
              <Badge badgeContent={totalItems} color="primary"> {/* Ändrad här */}
                <ShoppingCartOutlined style={{ marginLeft: '5px' }} />
              </Badge>
            </Link>
          </Cart>
        </Right>
      </Wrapper>
    </NavbarContainer>
  );
};

export default Navbar;
