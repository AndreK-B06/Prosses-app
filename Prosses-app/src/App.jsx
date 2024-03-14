import "./css/App.css";
import "./css/buffer-tank.css";

function App() {
  return (
    <>
      <section id="grid-container">
        <section className="Buffer-tank" id="buffer-top"></section>
        <section className="Buffer-tank" id="buffer-mid-top"></section>
        <section className="Buffer-tank" id="buffer-mid-bottom"></section>
        <section className="Buffer-tank" id="buffer-bottom"></section>
      </section>
    </>
  );
}

export default App;
