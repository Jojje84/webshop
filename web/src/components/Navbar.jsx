import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`


`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 10px 0;
  padding: 0px;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: rgb(170, 165, 165);
  padding-left: 30px;

  `;


const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color:rgb(170, 165, 165);
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 10px;
  
  
  `;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 5px;
  border-radius: 20px;
  background-color: white;
  
  `;

const Input = styled.input`
  border: none;
  margin: 5px;
  border-radius: 20px;
  padding-left: 5px;

  `;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: rgb(170, 165, 165);
  padding-right: 10px;
  margin-left: 30px;
  justify-content: center;
  
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
          Categorys
          Contact
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 14 }} />
          </SearchContainer>
        </Center>
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