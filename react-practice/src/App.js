import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("dark")
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
    }
    else {
      setMode("light")
    }
  }
  return (
    <>
      <Navbar title="textUtils1" mode={mode} toggleMode={toggleMode} />
      <div className='container'>
        {/* <TextForm heading="Analyase the Text"/> */}
        <About />
      </div>
    </>
  );
}

export default App;

