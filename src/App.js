import './App.css';
import A from './components/A';
import B from './components/B';
import C from './components/C';

function App() {
  let name="ravi "

  return (
    <div className="App">
      <h1>APP 🔎 {name}</h1>
      
      <A/>
      <B name={name}/>
      <C name={name}/>
    </div>
  );
}

export default App;
