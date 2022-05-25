import './App.css';
import Score from './components/Score.js'
import Play from './components/Play';

function App() {
  return (
    <>
    {/* <Score/> */}
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
    <Play/>
    </div>
    </>
  );
}

export default App;
