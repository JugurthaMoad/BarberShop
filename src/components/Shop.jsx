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
  const deleteElement = (it) => {
    let item = listArticles;
    let index = item.indexOf(it);
    item.splice(index, 1);
    setCartArticles(CartArticles - 1);
    setList(item);
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
