import "./Switch.css";

const Switch = ({ toggled, setToggled }) => {
  return (
    <label className="switch_outer_container">
      <label id="label_annual">Annual</label>
      <input
        type="checkbox"
        checked={toggled}
        onChange={(event) => setToggled(event.target.checked)}
        className="input"
      />
      <span className="slider" />
      <label id="label_monthly">Monthly</label>
    </label>
  );
};

export default Switch;
