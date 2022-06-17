import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/fonts.css';
import './styles/style.css';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Main from './pages/Main';
import Panel from './pages/Panel';
import Info from './pages/Info';
import Stats from './pages/Stats';
import PanelLayout from './PanelLayout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  
    <Routes>
        <Route path='/' element={<App />}>
            <Route index element={<Main />}/>
                <Route path="panel" element={<PanelLayout/>}>
                    <Route index element={<Panel/>}/>  
                    <Route path="info" element={<Info/>}/>  
                    <Route path="stats" element={<Stats/>}/>  
                </Route>
        </Route>
    </Routes>
  </BrowserRouter>
);


