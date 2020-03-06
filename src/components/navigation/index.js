import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    FaSearch,
    FaUser,
    FaPowerOff,
    FaEdit,
    FaArrowLeft,
    FaRegBell,
    FaRegComments,
} from 'react-icons/fa';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Notification from './Notification';
import { toggleSidebar, toggleMainChat } from 'actions/index';
import logo from 'img/neur.svg';

const Navigation = props => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isAvatarOpen, setIsAvatarOpen] = useState(false);

    const notificationRef = useRef();
    const avatarRef = useRef();

    const handleClickOutside = event => {
        if (notificationRef && !notificationRef.current.contains(event.target)) {
            setIsNotificationOpen(false);
        }
        if (avatarRef && !avatarRef.current.contains(event.target)) {
            setIsAvatarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const onSidebarButtonClick = () => {
        props.toggleSidebar();
    };
    return (
        <div className="az-header">
            <div className="container-fluid">
                <div className="az-header-left">
                    {props.fullWidth ? (
                        props.setup.isMainChatOpen ? (
                            <FaArrowLeft
                                className="arrow-fullWidthHeader"
                                onClick={() => props.toggleMainChat()}
                            />
                        ) : (
                            <Link to="/">
                                <img src={logo} style={{ width: '140px' }} alt="" />
                            </Link>
                        )
                    ) : null}
                    {props.fullWidth || (
                        <div
                            onClick={onSidebarButtonClick}
                            id="azSidebarToggle"
                            className="az-header-menu-icon d-lg-none d-flex"
                        >
                            <span />
                        </div>
                    )}

                    <a id="azChatBodyHide" className="az-header-arrow">
                        <i className="icon ion-md-arrow-back" />
                    </a>
                </div>
                <div className="az-header-center">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for anything..."
                    />
                    <button type="button" className="btn">
                        <FaSearch />
                    </button>
                </div>
                <div className="az-header-right">
                    <div className="az-header-message">
                        <Link to="/chat">
                            <FaRegComments />
                        </Link>
                    </div>
                    <div
                        className={classNames('dropdown az-header-notification', {
                            show: isNotificationOpen,
                        })}
                    >
                        <a
                            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                            className="new"
                        >
                            <FaRegBell />
                        </a>
                        <div ref={notificationRef} className="dropdown-menu">
                            <div className="az-dropdown-header d-sm-none">
                                <a className="az-header-arrow">
                                    <FaArrowLeft onClick={() => setIsNotificationOpen(false)} />
                                </a>
                            </div>
                            <h6 className="az-notification-title">Notifications</h6>
                            <p className="az-notification-text">You have 2 unread notification</p>
                            <div className="az-notification-list">
                                <Notification
                                    text="Althea Cabardo just created a new blog postqwqwq"
                                    data="Mar 13 02:56am"
                                />
                                <Notification
                                    text="Althea Cabardo just created a new blog postqwqwq"
                                    data="Mar 13 02:56am"
                                />
                                <Notification
                                    text="Althea Cabardo just created a new blog postqwqwq"
                                    data="Mar 13 02:56am"
                                />
                                <Notification
                                    text="Althea Cabardo just created a new blog postqwqwq"
                                    data="Mar 13 02:56am"
                                />
                            </div>
                            <div className="dropdown-footer">
                                <Link to="/notification">View All Notifications</Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className={classNames('dropdown az-profile-menu', {
                            show: isAvatarOpen,
                        })}
                    >
                        <a className="az-img-user-post">
                            <img
                                onClick={() => setIsAvatarOpen(!isAvatarOpen)}
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </a>
                        <div ref={avatarRef} className="dropdown-menu">
                            <div className="az-dropdown-header d-sm-none">
                                <a className="az-header-arrow">
                                    <FaArrowLeft onClick={() => setIsAvatarOpen(false)} />
                                </a>
                            </div>
                            <div className="az-header-profile">
                                <div className="az-img-user">
                                    <img src="https://via.placeholder.com/500x500" alt="" />
                                </div>
                                <h6>Aziana Pechon</h6>
                                <span>Premium Member</span>
                            </div>

                            <Link
                                to="/profile"
                                className="dropdown-item"
                                onClick={() => setIsAvatarOpen(false)}
                            >
                                <FaUser /> My Profile
                            </Link>
                            <Link
                                to="/account-settings"
                                className="dropdown-item"
                                onClick={() => setIsAvatarOpen(false)}
                            >
                                <FaEdit /> Edit Profile Account
                            </Link>

                            <Link
                                to="/signin"
                                className="dropdown-item"
                                onClick={() => setIsAvatarOpen(false)}
                            >
                                <FaPowerOff />
                                Sign Out
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps, { toggleSidebar, toggleMainChat })(Navigation);
