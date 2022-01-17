import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const [menuStatus, setmenuStatus] = useState(false);
  return (
    <Container>
      <a href='#'>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
        <p>
          <a href='#'>Model S</a>
        </p>
        <p>
          <a href='#'>Model 3</a>
        </p>
        <p>
          <a href='#'>Model x</a>
        </p>
        <p>
          <a href='#'>Model Y</a>
        </p>
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <MenuIcon
          onClick={() => {
            setmenuStatus(true);
          }}
        />
      </RightMenu>
      <BurgerNav show={menuStatus}>
        <Close>
          <CustomClose
            onClick={() => {
              setmenuStatus(false);
            }}
          />
        </Close>

        <li>
          <a href='#'>Existing Inventory</a>
        </li>
        <li>
          <a href='#'>Used Inventory</a>
        </li>
        <li>
          <a href='#'>Trade-In</a>
        </li>
        <li>
          <a href='#'>CyberTruck</a>
        </li>
        <li>
          <a href='#'>Roadaster</a>
        </li>
        <li>
          <a href='#'>Semi</a>
        </li>
        <li>
          <a href='#'>Charging</a>
        </li>
        <li>
          <a href='#'>Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: no-wrap;
  }
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(CloseIcon)``;
const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
