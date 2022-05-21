import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Container>
      <Navigation />
      <div style={{ height: "90%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
