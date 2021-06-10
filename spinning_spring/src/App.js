import './App.css';
import Sketch from "./components/spring"

function App() {
  return (
    <div className="main">
	<Sketch />
	<p className="help"> Use the slider, or press <span className="kbd">w</span> to increase angular velocity, and <span className="kbd">s</span> to decrease angular velocity. <br /> <br />
	    Press <span className="kbd nl">m</span> to switch to sin mode.
	</p>
    </div>
  );
}

export default App;
