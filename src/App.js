import AboutDetails from "./components/about_details";
import Shop from "./components/Shop";
import Landing from "./components/landing";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about_details" element={<AboutDetails />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
