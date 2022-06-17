import React from 'react';
import {Outlet} from "react-router-dom";
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';


function PanelLayout() {
    return ( 
        <div className="container">
            <div class="col2">
                <Sidebar/>
                <div class="content">
                    <Profile/>
                    <Outlet /> 
                </div>
            </div>
        </div>
    );
}

export default PanelLayout;