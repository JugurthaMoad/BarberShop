import Nav from "./shopping/nav";
import { Outlet } from "react-router-dom";
import CartContext from "../context/CartContext";
import { useState, useEffect } from "react";
const Shop = () => {
  const [listArticles, setList] = useState(() => {
    const data = localStorage.getItem("listArticles");
    return data ? JSON.parse(data) : [];
  });
  const [CartArticles, setCartArticles] = useState(() => {
    const data = localStorage.getItem("CartArticles");
    return data ? JSON.parse(data) : 0;
  });

  // this function will add elements in cart
  const addElement = (el) => {
    let items = [...listArticles];
    let article = {};
    let isInCart = items.find((item) => item.element.id === el.id);
    if (isInCart === undefined) {
      article.element = { ...el };
      article.rep = 1;
      items.push(article);
    } else {
      isInCart.rep += 1;
    }
    setList(items);
    setCartArticles(CartArticles + 1);
  };
  const deleteElement = (el) => {
    let items = [...listArticles];

    let isInCart = items.find((item) => item.element.id === el.id);
    if (isInCart !== undefined) {
      if (isInCart.rep > 1) {
        isInCart.rep -= 1;
      } else {
        items = items.filter((item) => item.element.id !== el.id);
      }
      setList(items);
      setCartArticles(CartArticles - 1);
    }
  };
  useEffect(() => {
    let data1 = localStorage.getItem("listArticles");
    let data2 = localStorage.getItem("CartArticles");

    if (data1) {
      setList(JSON.parse(data1));
    }
    if (data2) {
      setCartArticles(JSON.parse(data2));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("listArticles", JSON.stringify(listArticles));
    localStorage.setItem("CartArticles", JSON.stringify(CartArticles));
  }, [listArticles, CartArticles]);
  return (
    <div>
      <CartContext.Provider
        value={{
          articlesInCart: CartArticles,
          addElement: addElement,
          deleteElement: deleteElement,
          listArticles: listArticles,
        }}
      >
        <Nav />
        <Outlet />
      </CartContext.Provider>
    </div>
  );
};

export default Shop;
