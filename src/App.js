import React from 'react';
import Main from './pages/Main';
import {Outlet} from "react-router-dom";
import Headers from './components/Headers';
import BackgroundDots from './components/BackgroundDots';
import "./services/i18n";

function App() {
    return ( 
        <div className="container">
            <BackgroundDots/>
            <Headers/>
            <Outlet /> 
        </div>
    );
}

export default App;