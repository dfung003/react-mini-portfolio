import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

function App() {
  const [info, setInfo] = useState(null)
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
