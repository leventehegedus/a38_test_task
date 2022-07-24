import logo from './logo.svg';
import './App.scss';
import Wizard from './components/Wizard/Wizard';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Wizard />
      </div>
      <ToastContainer autoClose={2000} />
    </ThemeProvider>
  );
}

export default App;
