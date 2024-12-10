import logo from './logo.svg';
import './App.css';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="App">
    
    {/* import Spline from '@splinetool/react-spline'; */}
<div className="canvas h-[300px]">
<Spline scene="https://prod.spline.design/BX1zhRXJNZ7uQzPu/scene.splinecode" />
{/* <Spline scene="https://prod.spline.design/BX1zhRXJNZ7uQzPu/scene.splinecode" />
<Spline scene="https://prod.spline.design/BX1zhRXJNZ7uQzPu/scene.splinecode" /> */}
</div>
   

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    </div>
  );
}

export default App;
