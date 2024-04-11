import Greet from "./components/Greet";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
