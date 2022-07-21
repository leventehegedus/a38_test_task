import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#416f43',
    },
    secondary: {
      main: '#ede1c3',
    },
    background: {
      default: '#f6f2ed',
    },
  },
  typography: {
    fontFamily: 'Inter',
    h1: {
      fontFamily: 'Quicksand',
      letterSpacing: '.5rem',
    },
    h2: {
      fontFamily: 'Quicksand',
      letterSpacing: '.5rem',
    },
    h3: {
      fontFamily: 'Quicksand',
      letterSpacing: '.5rem',
    },
    h4: {
      fontFamily: 'Quicksand',
      letterSpacing: '.5rem',
    },
    h5: {
      fontFamily: 'Quicksand',
      letterSpacing: '.3rem',
    },
    h6: {
      fontFamily: 'Quicksand',
      letterSpacing: '.2rem',
    },
    button: {
      fontFamily: 'Quicksand',
      fontWeight: 400,
      letterSpacing: '.2rem',
      fontSize: 20,
      textTransform: 'none'
    },
  },
  shape: {
    borderRadius: 0,
  },
});
