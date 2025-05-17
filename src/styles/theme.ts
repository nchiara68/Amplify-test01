import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#002b4b',  // Replace with your primary color
      contrastText: '#fff',
    },
    secondary: {
      main: '#32b2e7',  // Replace with your secondary color
      contrastText: '#fff',
    },
    //background: {
    //  default: '#f5f5f5',  // App background
     // paper: '#ffffff',    // Card, paper background
   // },
    text: {
      primary: '#002b4b',
      secondary: '#32b2e7',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none', // Optional: Remove uppercase from buttons
    },
  },
  shape: {
    borderRadius: 8, // Global border radius
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          
background: 'linear-gradient(to right, #32b2e7, #002b4b)',
          minHeight: '100vh',
          margin: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});

export default theme;
