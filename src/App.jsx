import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import MainPage from "./pages/main";
import bgImage from "./assets/icons/bg3.jpg";
import Shop from "./pages/shop";

function App() {
  return (
    <div className="wrapper">
      {/* <img className="background-image" src={bgImage} alt="" /> */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
