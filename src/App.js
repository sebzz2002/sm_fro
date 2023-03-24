import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProducts from "./Components/AddProducts";
import Billing from "./Components/Billing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<AddProducts />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
