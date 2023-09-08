import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavouritesPages from "./pages/FavouritesPages";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favourites' element={<FavouritesPages />} />
      </Routes>
    </>
  );
}

export default App;
