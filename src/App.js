import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.comp";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
