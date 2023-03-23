import PricingCard from "./components/PricingCard/PricingCard";
import data from "./data/data.json";
import "./App.css";

function App() {
  return (
    <div className="test">
      <div className="app_container">
        {data &&
          data.map((card) => {
            return <PricingCard key={card.id} card={card} />;
          })}
      </div>
    </div>
  );
}

export default App;
