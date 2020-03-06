import React from 'react';

import { NavLink } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import logo from 'img/neur.svg';
import Navigation from './Links';

const Sidebar = () => {
    return (
        <div className="az-sidebar">
            <div className="az-sidebar-header">
                <NavLink to="/">
                    <img className="logo" src={logo} alt="logo" />
                </NavLink>
            </div>

            <Scrollbars
                autoHideTimeout={200}
                autoHideDuration={200}
                autoHide
                hideTracksWhenNotNeeded
                style={{ width: '100%', height: '100%' }}
            >
                <div className="az-sidebar-body">
                    <ul className="nav">
                        <div className="nav-label">
                            <li>Main Menu</li>
                        </div>
                        <Navigation />
                    </ul>
                </div>
            </Scrollbars>
        </div>
    );
};

export default Sidebar;
