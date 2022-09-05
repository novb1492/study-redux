import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Detail from "../rotues/Detail";
import Home from "../rotues/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/movie/:id/:secondId" element={<Detail></Detail>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
