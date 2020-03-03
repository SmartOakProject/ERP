import React, { useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/index';

import Notification from './Notification';
import Spinner from '../common/Spinner';
import User from '../common/User';
import FastChat from '../common/FastChat';

const Notifications = props => {
    useEffect(() => {
        props.fetchUsers();
    }, []);
    return (
        <div style={{ flex: 1 }}>
            <div class="notification-content">
                <div class="notification-container">
                    <Scrollbars style={{ height: '98%' }}>
                        <div class="notification-main">
                            <div id="idNotifications" class="notification-list">
                                <Notification
                                    username="Wojciech John"
                                    desc="Opublikował post"
                                    date="2 d"
                                />
                                <Notification
                                    username="Wojciech John"
                                    desc="Opublikował post"
                                    date="2 d"
                                />
                                <Notification
                                    username="Wojciech John"
                                    desc="Opublikował post"
                                    date="2 d"
                                />
                            </div>
                        </div>
                    </Scrollbars>
                    <FastChat />
                    <div
                        class=" az-content-right-chat-main"
                        style={{ width: '29vw' }}
                    >
                        <Scrollbars style={{ height: '98%' }}>
                            <div id="azChatList" class="az-chat-list">
                                {props.users ? (
                                    props.activeUsers.map(e => {
                                        return (
                                            <User
                                                id={e.id}
                                                name={e.name}
                                                date={e.id}
                                                email={e.email}
                                                key={e.id}
                                                icons
                                            />
                                        );
                                    })
                                ) : (
                                    <Spinner />
                                )}
                            </div>
                        </Scrollbars>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return state;
};
export default connect(
    mapStateToProps,
    { fetchUsers }
)(Notifications);
