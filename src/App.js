import PricingCard from "./components/PricingCard/PricingCard";
import data from "./data/data.json";
import "./App.css";
import Switch from "./components/Switch/Switch";

function App() {
  return (
    <div>
      <div className="app_container">
        <header className="app_header">
          <h1>Our Pricing</h1>
          <Switch />
        </header>

        {data &&
          data.map((card) => {
            return <PricingCard key={card.id} card={card} />;
          })}
      </div>
    </div>
  );
}

export default App;
