
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from './components/header/Header';

// Pages
import Home from './components/pages/home/Home'
function App() {
  
  return (
    <>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> }/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
