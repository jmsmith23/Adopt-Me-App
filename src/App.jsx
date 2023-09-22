import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Frank" animal="Cat" breed="Tabby" />
    <Pet name="Blondie" animal="Dog" breed="German Shepard" />
    <Pet name="Rizzo" animal="Rat" breed="Alley-Rat" />
  </div>;
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
