import { useState } from "react";
import PricingCard from "./components/PricingCard/PricingCard";
import data from "./data/data.json";
import "./App.css";
import Switch from "./components/Switch/Switch";
import bottomImg from "./assets/images/bg-bottom.svg";
import topImg from "./assets/images/bg-top.svg";

function App() {
  const [toggled, setToggled] = useState(false);

  return (
    <div>
      <div className="top_img_container">
        <img src={topImg} alt="top" className="background_img" />
      </div>
      <div className="app_container">
        <header className="switch_header">
          <h1>Our Pricing</h1>
          <Switch toggled={toggled} setToggled={setToggled} />
        </header>
        <div className="cards">
          {data &&
            data.map((card) => {
              return (
                <PricingCard key={card.id} card={card} toggled={toggled} />
              );
            })}
        </div>
      </div>
      <div className="bottom_img_container">
        <img src={bottomImg} alt="bottom" className="background_img" />
      </div>
    </div>
  );
}

export default App;
