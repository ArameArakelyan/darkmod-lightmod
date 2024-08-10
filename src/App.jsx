import './App.css';
import Header from './components/header';
import React ,{ useContext } from 'react';
import { ThemeContext, ThemeProvider } from './components/context';
import Section1 from './components/section1';
import Friends from './components/friends';


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Section1/>
        <div style={{display:'flex'}}>
          <Friends/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
