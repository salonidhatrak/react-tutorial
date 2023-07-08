import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="textUtils1"/>
      <div className='container'>
      <TextForm heading="Analyase the Text"/>
      </div>
    </>
  );
}

export default App;

