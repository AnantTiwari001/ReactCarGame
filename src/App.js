import './App.css';
import Score from './components/Score.js'
import Cars from './components/Cars.js'
import Game from './components/Game';
import Play from './components/Play';

function App() {
  return (
    <>
    <Score/>
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
    <Play>
      <Game/>
      <Cars/>
    </Play>
    </div>
    </>
  );
}

export default App;
