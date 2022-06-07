import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Characters from "./Components/Characters/Characters";
import Weapons from "./Components/Weapons/Weapons";
import Ranks from "./Components/Ranks/Ranks";
import Nav from "./Components/nav/nav";
import CharacterInfo from "./Components/CharacterInfo/CharacterInfo";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterInfo />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/ranks" element={<Ranks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
