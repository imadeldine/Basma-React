import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
        <Route path="/" exact element={<Register />} />

        </Routes>
    </Router>
    </div>
  );
}

export default App;
