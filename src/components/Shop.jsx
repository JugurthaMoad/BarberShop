import Nav from "./shopping/nav";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Shop;
