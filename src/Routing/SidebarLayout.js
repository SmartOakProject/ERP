import React from 'react';

import Sidebar from '../components/sidebar/';
import Navigation from '../components/navigation';
import classNames from 'classnames';

import { connect } from 'react-redux';
import { toggleSidebar } from '../actions/index';

const RoutingWithSidebar = ({ children, isOpen, toggleSidebar }) => {
    return (
        <div
            className={classNames({
                'az-sidebar-show': isOpen
            })}
            style={{ display: 'flex' }}
        >
            <Sidebar />
            <div className="content">
                <Navigation />
                {children}
            </div>
            <div onClick={toggleSidebar} className="az-navbar-backdrop"></div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        isOpen: state.setup.isSidebarOpen
    };
};
export default connect(
    mapStateToProps,
    { toggleSidebar }
)(RoutingWithSidebar);
