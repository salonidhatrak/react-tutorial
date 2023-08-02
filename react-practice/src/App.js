import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("dark")
  const [alert, setAlert]=useState(null)

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
}

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      showAlert("Dark mode", "success")
    }
    else {
      setMode("light")
      showAlert("Light mode", "success")
    }
  }
  return (
    <>
      <Navbar title="textUtils1" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container'>
        <TextForm heading="Analyase the Text"/>
        {/* <About /> */}
      </div>
    </>

    
    
    
  );
}

export default App;

