import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { Header,Navbar,Features } from "./components";
function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
        <Route path="/" exact element={<Register />} /> 
        <Route path='/home' exact element={<div><Navbar/><Header/><Features/></div>}/>
        
        
        </Routes>
    </Router>
    </div>
  );
}

export default App;
