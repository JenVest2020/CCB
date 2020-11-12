import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
