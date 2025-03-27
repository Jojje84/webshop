import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled.div`
  height: 60px;
  margin-bottom: 20px;


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
  background-color: #B0B3B8;
  padding-left: 30px;
  justify-content: flex-start;
  height: 100%;

  `;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-right: 15px;
  font-weight: bold;
  font-size: 14px;
`;


const Center = styled.div`
  flex-basis: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #B0B3B8;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 100%;
  padding-right: 10px;
  
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

  `;

const CenterSpace = styled.div`
  flex-basis: 15%;
  display: flex;
  justify-content: center;
  background-color: white;

  `;

const Right = styled.div`
  flex-basis: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #B0B3B8;
  padding-right: 10px;
  margin-left: 30px;
  justify-content: center;
  height: 100%;
  
  
  `;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 15px;

  `;

const Navbar = ({ onCategoriesClick }) => {
  return (
    <Container>
      <Wrapper>
      <Left>
      <StyledLink to="/">Home</StyledLink>
      <MenuItem onClick={onCategoriesClick}>Categories</MenuItem>
      <StyledLink to="/contact">Contact</StyledLink>
    </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 20 }} />
          </SearchContainer>
        </Center>
        <CenterSpace />
        <Right>
          <MenuItem>
            <StyledLink to="/login">Log in</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/cart">
              <Badge badgeContent={1} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </StyledLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )

}

export default Navbar