import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <h1>hello react redux integration</h1>
      <Counter/>
      <Employee/>
    </div>
  );
}

export default App;
