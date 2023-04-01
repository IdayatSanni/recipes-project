import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Recipes />
      <Button message="Subscribe For More Recipes" />
    </div>
  );
}

export default App;
