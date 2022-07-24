import './App.scss';
import Wizard from './components/Wizard/Wizard';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="App">
        <Wizard />
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
