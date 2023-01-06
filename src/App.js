import AboutDetails from "./components/about_details";
import Shop from "./components/Shop";
import Landing from "./components/landing";
import Appointment from "./components/appointment";
import Home from "./components/shopping/home";
import Cart from "./components/shopping/cart";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/BarberShop/" element={<Landing />} />
        <Route path="/about_details" element={<AboutDetails />} />
        <Route path="/shop" element={<Shop />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
