import "./_index.scss";
import VirtualPlayground from "@components/virtual-playground";
import "./_index.scss";

const MainPage = () => {
  return (
    <div className="container">
      <div className="main__container">
        <div className="main__playground">
          <VirtualPlayground />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
