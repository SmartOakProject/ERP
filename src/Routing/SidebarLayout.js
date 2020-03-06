import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleSidebar } from 'actions/index';
import Sidebar from 'components/sidebar/';
import Navigation from 'components/navigation';

const RoutingWithSidebar = ({ children, isOpen, toggleSidebar }) => {
    return (
        <div
            className={classNames({
                'az-sidebar-show': isOpen,
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

RoutingWithSidebar.propTypes = {
    children: PropTypes.element.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
        isOpen: state.setup.isSidebarOpen,
    };
};
export default connect(mapStateToProps, { toggleSidebar })(RoutingWithSidebar);
