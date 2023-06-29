
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';

function App() {
  
  return (
    <>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
