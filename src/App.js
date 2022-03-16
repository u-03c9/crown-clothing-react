import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.comp";
import ShopPage from "./pages/shop/shop.comp";
import Header from "./components/header/header.comp";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
