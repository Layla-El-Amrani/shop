import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative;
  z-index: 1000;
`;

const Logo = styled.h1`
  color: #2c3e50;
  font-size: 26px;
  margin: 0;
  font-family: 'Roboto', sans-serif;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 20px;
`;

const NavLink = styled(Link)`
  color: #34495e;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #2980b9;
    transform: translateY(-2px);
  }
`;

const StyledCart = styled.div`
  display: flex;
  align-items: center;
  color: #34495e;
  font-size: 16px;
  border: 1px solid #2980b9;
  border-radius: 5px;
  padding: 5px 10px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(41, 128, 185, 0.1);
  }
`;

export default function Navbar({ count }) {
  return (
    <StyledNavBar>
      <Logo>Shop</Logo>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/about">About</NavLink></NavItem>
        <NavItem>
          <NavLink to="/cart">
            <StyledCart>Cart ({count})</StyledCart>
          </NavLink>
        </NavItem>
      </NavList>
    </StyledNavBar>
  );
}
