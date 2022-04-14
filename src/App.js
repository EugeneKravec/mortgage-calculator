// import logo from './logo.svg';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import Banks from './components/Banks/Banks'
import CountMortgage from './components/CountMortgage/CountMortgage'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <div className="wrapper-content">
          <Routes>
            <Route path="banks/*" element={<Banks />}
            />
            <Route path="/countmortgage/*" element={<CountMortgage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
