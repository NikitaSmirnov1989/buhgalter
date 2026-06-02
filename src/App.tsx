import React, {createContext, useState} from 'react';
import './App.css';
import { store } from './features/store';
import { Provider } from 'react-redux';

import { 
        Header, 
        Footer,
        Content
      } from './components/layout';

import ThemeProvider from './context/themeContext';


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="App">
          <Header/>
          <Content/>
          <Footer/>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
