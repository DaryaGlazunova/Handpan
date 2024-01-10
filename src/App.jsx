import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import { BasketPage } from "./pages/basket";
import MainPage from "./pages/main";

import Shop from "./pages/shop";
import ProductPage from "./pages/product-page";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Shop/:id" element={<ProductPage />} />
          <Route path="/Basket" element={<BasketPage />} />
        </Routes>
      </main>
    </div>
  );
}
