import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { Header, Navbar, Features, Work, Share,Challenge,Card,Store,Stay } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Register />} />
          <Route
            path="/home"
            exact
            element={
              <div>
                <Navbar />
                <Header />
                <Features />
                <Work />
                <Share />
                <Challenge/>
                <Card/>
                <Store/>
                <Stay/>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
