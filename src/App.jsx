import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import "./App.css";

function App() {
  const [category, setCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      <Navbar setCategory={setCategory} setSearchTerm={setSearchTerm} />
      <NewsBoard category={category} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
