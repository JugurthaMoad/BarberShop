import Nav from "./shopping/nav";
import { Outlet } from "react-router-dom";
import CartContext from "../context/CartContext";
import { useState } from "react";
const Shop = () => {
  const [listArticles, setList] = useState([]);
  const [CartArticles, setCartArticles] = useState(0);

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
