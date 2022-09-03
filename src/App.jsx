import "./App.css";
import Home from "./components/pages/home";
import { Routes, Route } from "react-router-dom";
import Sports from "./components/pages/Sports";
import Tech from "./components/pages/tech";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar
        title={"Newsapp"}
        brandUrl={
          "https://img.icons8.com/cotton/64/000000/morning-news--v1.png"
        }
        links={{
          link1: "Top 10",
          link2: "sports",
          link3: "tecnology",
          path1: "/",
          path2: "/sport",
          path3: "/tech",
        }}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sport" element={<Sports />} />
        <Route exact path="/tech" element={<Tech />} />
      </Routes>
    </>
  );
}

export default App;
