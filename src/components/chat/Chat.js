import React, { useState, useEffect } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { IoIosClose } from 'react-icons/io';
import { FaRegFileAlt } from 'react-icons/fa';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import User from 'components/common/User';
import Spinner from 'components/common/Spinner';
import { fetchActiveUsers } from 'actions/index';
import userGroup from 'img/user-group.png';
import 'rc-tooltip/assets/bootstrap_white.css';
import ChatBody from './ChatBody';

const Chat = ({ fetchActiveUsers, setup, activeUsers }) => {
    const [toggleFile, setToggleFile] = useState(false);
    const [view, setView] = useState('users');

    useEffect(() => {
        fetchActiveUsers();
    }, []);

    const toggleFiles = state => {
        setToggleFile(state);
    };
    return (
        <div
            className={classNames(
                'content-chat ',
                {
                    'az-content-body-show': setup.isMainChatOpen,
                },
                {
                    'az-content-left-show': toggleFile,
                },
            )}
        >
            <div className="az-content-left az-content-left-chat">
                <nav className="nav az-nav-line az-nav-line-chat">
                    <span
                        className={classNames('nav-link', {
                            active: view === 'users',
                        })}
                        onClick={() => setView('users')}
                    >
                        Recent Chat
                    </span>
                    <span
                        className={classNames('nav-link ', {
                            active: view !== 'users',
                        })}
                        onClick={() => setView('group')}
                    >
                        Groups
                    </span>
                </nav>

                <Scrollbars style={{ height: '100%' }}>
                    <div id="azChatList" className="az-chat-list">
                        {activeUsers.length ? (
                            view === 'users' ? (
                                activeUsers.map(e => {
                                    return (
                                        <User
                                            id={e.id}
                                            name={e.name}
                                            date={e.id}
                                            email={e.email}
                                            key={e.id}
                                            isChat
                                            icons
                                        />
                                    );
                                })
                            ) : (
                                // todo User Group
                                <div className="media">
                                    <div className="az-img-user ">
                                        <img src={userGroup} alt="" />
                                        <span>2</span>
                                    </div>
                                    <div className="media-body">
                                        <div className="media-contact-name">
                                            <span>Wojtek John, Michał Zsadadasdasdadas</span>
                                            <span>2 hours</span>
                                        </div>
                                        <p>4 Members</p>
                                    </div>
                                </div>
                            )
                        ) : (
                            <Spinner />
                        )}
                    </div>
                </Scrollbars>
            </div>

            <div className="az-content-body az-content-body-chat">
                <ChatBody toggleFiles={toggleFiles} />
            </div>

            <div className="az-content-left az-content-left-invoice">
                <div className="invoice-header">
                    <IoIosClose onClick={() => toggleFiles(false)} />

                    <h2 className="az-content-title">Shared Files</h2>
                </div>
                <div id="azInvoiceList" className="az-invoice-list">
                    <Scrollbars style={{ height: '96%' }}>
                        <div className="media">
                            <div className="media-icon">
                                <FaRegFileAlt />
                            </div>
                            <div className="media-body">
                                <h6>
                                    <span>Textwebpages.word</span>
                                    <p>
                                        <span>Date:</span> Oct 25
                                    </p>
                                </h6>
                            </div>
                        </div>
                    </Scrollbars>
                </div>
            </div>
        </div>
    );
};
Chat.propTypes = {
    fetchActiveUsers: PropTypes.func,
    setup: PropTypes.shape({
        isMainChatOpen: PropTypes.bool,
    }),
    activeUsers: PropTypes.arrayOf(PropTypes.object),
};
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps, { fetchActiveUsers })(Chat);
