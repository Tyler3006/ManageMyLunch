import { Outlet, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload penis ass.
        </p>
          <Link to="Login.js">Login</Link>
      </header>
      <Outlet/>
    </div>
  );
}

export default App;
