import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Bread from "./Components/Bread";
import New from "./Components/New";
import UpdateBread from "./Components/UpdateBread";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bread/:id" element={<Bread />} />
          <Route path="/bread/update/:id" element={<UpdateBread />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
