import logo from './logo.svg';
import './App.scss';
import Wizard from './components/Wizard/Wizard';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Wizard />
      </div>
    </ThemeProvider>
  );
}

export default App;
