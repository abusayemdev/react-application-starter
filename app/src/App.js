import react from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import Fruits from './components/Props';
import StateClass from './components/State';
import UseFruitState from './components/useState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunctionalComponent/>
        <ClassComponent/>
        <Fruits name="Apple" color="Red"/>
        <StateClass/>
        <UseFruitState/>
       
      </header>
    </div>
  );
}

export default App;
