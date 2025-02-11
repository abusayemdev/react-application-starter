import react from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunctionalComponent/>
        <ClassComponent/>
       
      </header>
    </div>
  );
}

export default App;
