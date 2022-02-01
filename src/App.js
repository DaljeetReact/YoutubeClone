import React,{useReducer} from 'react';
import {Home} from './Pages'
import {AppContextProvider,Reducer,InitState} from './Store'
function App() {
  const [State, setState] = useReducer(Reducer,InitState);

  return (
    <AppContextProvider value={{State,setState}}>
      <Home />
   </AppContextProvider>
  );
}

export default App;
