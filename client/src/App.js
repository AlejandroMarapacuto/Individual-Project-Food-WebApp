import "./App.css";
import LandingPage from "./views/landingPage/landingPage";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./views/home/home";
import NavBar from "./components/navBar/navBar";
import About from "./views/about/about";
import CreateRecipe from "./views/createRecipe/createRecipe";
import RecipeDetail from "./views/recipeDetail/recipeDetail";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar></NavBar>}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/editRecipe/:id" element={<CreateRecipe />} />
        <Route path="/createRecipe" element={<CreateRecipe />} />
        <Route path="/detail/:id" element={<RecipeDetail />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
