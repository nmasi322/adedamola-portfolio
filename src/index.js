import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
import Toggle from './components/ThemeToggle';
import App from './App';
import HandleImg from "./components/HandleImg"

ReactDOM.render(
  <React.StrictMode>
        <ThemeProvider>
      <Background>
        <div className='text-black dark:text-gray-300 px-5 py-4 md:px-20 md:py-6'>
        <h1 className='text-lg font-semibold'>Adedamola <br /> Bamigboye</h1>
        </div>
         <div className="absolute right-0 top-0 pr-5 pt-4 md:pr-20 md:pt-6">
          <Toggle />
          </div>
       
        <App />
          </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
