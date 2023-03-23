import PricingCard from "./components/PricingCard/PricingCard";
import data from "./data/data.json";
import "./App.css";

function App() {
  return (
    <div>
      <div className="app_container">
        <header className="app_header">
          <h1>Our Pricing</h1>
          <button>Monthly</button>
        </header>
        {data &&
          data.map((card) => {
            console.log(`data from:`, data);
            return <PricingCard key={card.id} card={card} />;
          })}
      </div>
    </div>
  );
}

export default App;
