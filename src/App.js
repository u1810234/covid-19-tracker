import "./App.css";
import { Header } from "./components/Header/Header";
import InfoBox from "./components/InfoBox/InfoBox";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__stats">
        <InfoBox title="Infected" cases={123} total={123} />
        <InfoBox title="Recovered" cases={123} total={123} />
        <InfoBox title="Deaths" cases={123} total={123} />
      </div>
    </div>
  );
}

export default App;
