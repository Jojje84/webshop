import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

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
  bsckground-color: white;

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

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          Home
          Categories
          Contact
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 20 }} />
          </SearchContainer>
        </Center>
        <CenterSpace>
        </CenterSpace>
        <Right>
          <MenuItem>black/white</MenuItem>
          <MenuItem>log in</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )

}

export default Navbar