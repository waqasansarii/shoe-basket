import React,{useReducer} from'react'
import './App.css';
import Routers from './routes';
import reducer from './reducer/reducer'
import {Initial_state} from './reducer/reducer'
import shopContext from './context/context';



function App() {

  const [state,dispatch] =useReducer(reducer,Initial_state)

  return (
    <shopContext.Provider value={
      {addCart : state, setCart : dispatch}
    }>

    <div >
      
      <Routers />
    </div>
    </shopContext.Provider>
  );
}

export default App;
