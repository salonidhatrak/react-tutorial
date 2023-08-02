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
  setTimeout(()=>{
    setAlert(null)
  },3000)
}

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode", "success")
    }
  }
  return (
    <>
      <Navbar title="textUtils1" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container'>
        <TextForm showAlert={showAlert} heading="Analyase the Text"/>
        {/* <About /> */}
      </div>
    </>

    
    
    
  );
}

export default App;

