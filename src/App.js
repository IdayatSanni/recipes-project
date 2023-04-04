import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Recipes />
      <Button message="Subscribe For More Recipes" />
      <Footer />
    </div>
  );
}

export default App;
