import { Route, Routes } from "react-router-dom";
// import Home from "./Components/Pages/Home";
import Sneakers from "./Components/Pages/Sneakers";
import Footer from "./Components/UI/Footer";
import NavBar from "./Components/UI/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path="/" element={ <Home /> } /> */}
        <Route path="/" element={<Sneakers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
