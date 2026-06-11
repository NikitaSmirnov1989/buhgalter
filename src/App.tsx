import React, {createContext, useEffect, useState} from 'react';
import { createPortal } from 'react-dom';
import './App.css';
import { store } from './features/store';
import { Provider } from 'react-redux';

import { 
        Header, 
        Footer,
        Content
      } from './components/layout';
import {Toast} from './components/layout';

import ThemeProvider from './context/themeContext';


function App() {

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const cookieToast = localStorage.getItem("cookieToast");
    if(cookieToast === "0"){
      setShowToast(false);
      return;
    }
    setShowToast(true);
  }, []);

  function onCloseToast(){
    setShowToast(false);
    localStorage.setItem("cookieToast", "0");
  }

  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="App">
          <Header/>
          <Content/>
          <Footer/>
          {showToast && createPortal(<Toast onClose={() => onCloseToast()}/>, document.body)}
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
