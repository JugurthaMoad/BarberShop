import React, { useState, useRef, useContext } from "react";
import { Link, useMatch } from "react-router-dom";
import styled, { css } from "styled-components";
import { MenuIcon, Logo, Close, CartIcon } from "../../lib/icons";
import CartContext from "../../context/CartContext";
const Nav = () => {
  const ref = useRef(null);
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false); // hide by default
  const handleShow = () => {
    setShow(!show);
    console.log("clicker");
  };
  const handleOutClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  };
  const styledNav = () => css`
    width: 100%;
    height: 70px;
    padding: 0px 15px 0px 0px;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 5px;
    align-items: center;
  `;
  const L_nav = styled.nav`
    display: none;

    ${styledNav()}
    @media only screen and (min-width: 700px) {
      display: flex;
    }
  `;
  const S_nav = styled.nav`
    display: flex;
    ${styledNav()}
    @media only screen and (min-width: 700px) {
      display: none;
    }
  `;
  const L_sub_nav = styled.ul`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    list-style: none;
    font-size: 0.7em;
    li {
      opacity: ${({ current }) => (current ? "0.2" : "1")};
    }
    li:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  `;
  const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    color: inherit;
    font-size: inherit;
  `;
  const S_sub_nav = styled.ul`
    display: ${({ display }) => (display ? "flex" : "none")};
    width: 80%;
    height: 100vh;
    background-color: rgb(33, 50, 32);
    position: fixed;
    top: 0px;
    color: white;
    right: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style: none;
    font-size: 0.7em !important;
    z-index: 100;
  `;
  const Logo_container = styled.div`
    display: flex;
    gap: 0px;
    font-size: min(7vw, 1.2rem);
    justify-content: center;
    align-items: center;
    /* You can change*/
    word-spacing: -1px;
    &:hover {
      cursor: pointer;
    }
  `;
  const Close_container = styled.span`
    position: fixed;
    top: 10px;
    right: 10px;
  `;
  const Background = styled.div`
    width: 100%;
    display: ${({ display }) => (display ? "block" : "none")};
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 0;
  `;
  const Group = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Element = styled.span`
    display: ${({ element }) => (element > 0 ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    background-color: red;
    color: white;
    padding: 10px;
    width: 25px;
    height: 25px;
    font-size: 15px !important;
    border-radius: 100px;
  `;
  return (
    <div>
      <L_nav>
        <Logo_container>
          <Logo />
          Online Shop
        </Logo_container>

        <L_sub_nav>
          <li current={useMatch("/")}>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li current={useMatch("/shop")}>
            <StyledLink to="/shop">Products</StyledLink>
          </li>
          <li current={useMatch("/shop/cart")}>
            <StyledLink to="/shop/cart">
              <CartIcon className="iconSize" />
              <Element element={cart.articlesInCart}>
                {cart.articlesInCart}
              </Element>
            </StyledLink>
          </li>
        </L_sub_nav>
      </L_nav>
      <S_nav>
        <Logo_container size="1em">
          <Logo />
          Barber Shop
        </Logo_container>
        <Group>
          <StyledLink to="/shop/cart">
            <CartIcon className="iconSize" />
            <Element element={cart.articlesInCart}>
              {cart.articlesInCart}
            </Element>
          </StyledLink>
          <MenuIcon click={handleShow} />
        </Group>

        <S_sub_nav ref={ref} display={show}>
          <Close_container>
            <Close click={handleShow} />
          </Close_container>
          <li onClick={handleShow}>
            <StyledLink to="/BarberShop/">Home</StyledLink>
          </li>
          <li onClick={handleShow}>
            <StyledLink to="/shop">Products</StyledLink>
          </li>
          <li onClick={handleShow}>
            <StyledLink to="/shop/cart">Cart</StyledLink>
          </li>
        </S_sub_nav>
        <Background onClick={handleOutClick} display={show} />
      </S_nav>
    </div>
  );
};

export default Nav;
