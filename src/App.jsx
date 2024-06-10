import "./css/App.css";
import "./css/ProgressTank.css";
import ProgressTank from "./components/ProgressTank/ProgressTank";
import Valve from "./components/Valve/Valve";

function App() {
  return (
    <>
      <nav></nav>
      <section id="grid-container">
        <Valve></Valve>
        <ProgressTank></ProgressTank>
        <Valve></Valve>
        <Valve></Valve>
      </section>
    </>
  );
}

export default App;
