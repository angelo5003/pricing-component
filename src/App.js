import { useState } from "react";
import PricingCard from "./components/PricingCard/PricingCard";
import data from "./data/data.json";
import "./App.css";
import Switch from "./components/Switch/Switch";

function App() {
  const [toggled, setToggled] = useState(false);

  return (
    <div>
      <div className="app_container">
        <header className="app_header">
          <h1>Our Pricing</h1>
          <Switch toggled={toggled} setToggled={setToggled} />
        </header>

        {data &&
          data.map((card) => {
            return <PricingCard key={card.id} card={card} toggled={toggled} />;
          })}
      </div>
    </div>
  );
}

export default App;
