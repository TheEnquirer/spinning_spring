import './App.css';
import Sketch from "./components/spring"

function App() {
  return (
    <div className="main">
	<Sketch />
	<p className="help"> Press <span className="kbd">w</span> to increase angular velocity, and <span className="kbd">s</span> to decrease angular velocity. <br /> <br />
	    <span className="kbd nl">r</span> to reset.
	</p>
    </div>
  );
}

export default App;
