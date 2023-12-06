import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import MainPage from "./pages/main";
import bgImage from "./assets/icons/bg3.jpg";

function App() {
  return (
    <div className="wrapper">
      {/* <img className="background-image" src={bgImage} alt="" /> */}
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
