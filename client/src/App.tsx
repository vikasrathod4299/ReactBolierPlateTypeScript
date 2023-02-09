import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Router from './Router';
import NavBar from './components/NavBar';

function App() {


  return (
    <div className="App">
        <header>
          <NavBar/>
        </header>
        <section>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </section>
    </div>
  );
}

export default App;
