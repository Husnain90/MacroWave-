import "./App.css";
import MacroWaveMointer from "./Components/MacroWaveMointer/MacroWaveMointer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="flex flex-col items-center gap-8 ">
      <NavBar />
      <MacroWaveMointer />
    </div>
  );
}

export default App;
