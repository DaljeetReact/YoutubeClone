import React,{useReducer} from 'react';
import {Home} from './Pages'
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {AppContextProvider,Reducer,InitState} from './Store'

const theme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
  },
});

function App() {
  const [State, Dispatch] = useReducer(Reducer,InitState);
  return (
    <AppContextProvider value={{State,Dispatch}}>
      <ThemeProvider theme={theme}>
         <Home />
      </ThemeProvider>
   </AppContextProvider>
  );
}

export default App;
