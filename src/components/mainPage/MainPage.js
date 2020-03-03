import React, { useState, useEffect } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import Post from './Post';
import User from '../common/User';
import FastChat from '../common/FastChat';
import Loading from '../common/Spinner';

import {
    fetchPostsAndUsers,
    fetchActiveUsers,
    toggleCreatePost
} from '../../actions/index';
import {
    FaCamera,
    FaPaperclip,
    FaSmile,
    FaEllipsisV,
    FaRegPaperPlane,
    FaRegEdit,
    FaVideo
} from 'react-icons/fa';
import ReactModal from '../common/Modal';

const MainPage = props => {
    useEffect(() => {
        props.fetchActiveUsers();
        props.fetchPostsAndUsers();
    }, []);

    return (
        <div>
            <ReactModal />
            <div class="az-content-body">
                <div class="az-content-body-posts">
                    <div id="azChatBody" class="az-chat-body-main">
                        <Scrollbars style={{ height: '100%' }}>
                            <div class="az-chat-footer-main">
                                <div>
                                    <span
                                        className="create-post"
                                        onClick={() => props.toggleCreatePost()}
                                    >
                                        <FaRegEdit className="mr-2" />
                                        Create a post
                                    </span>
                                </div>
                                <nav class="nav">
                                    <a
                                        href=""
                                        class="nav-link"
                                        data-toggle="tooltip"
                                        title="Add Photo"
                                    >
                                        <FaCamera />
                                    </a>
                                    <a
                                        href=""
                                        class="nav-link"
                                        data-toggle="tooltip"
                                        title="Attach a File"
                                    >
                                        <FaPaperclip />
                                    </a>
                                    <a
                                        href=""
                                        class="nav-link"
                                        data-toggle="tooltip"
                                        title="Add Emoticons"
                                    >
                                        <FaSmile />
                                    </a>
                                    <a href="" class="nav-link">
                                        <FaEllipsisV />
                                    </a>
                                </nav>
                            </div>
                            <div class="content-inner">
                                {props.posts.map(e => (
                                    <Post
                                        key={e.id}
                                        id={e.id}
                                        username={e.username}
                                        avatar={e.avatar}
                                        date={e.date}
                                        desc={e.desc}
                                        img={e.img}
                                        userId={e.userId}
                                        comments={e.comments}
                                    />
                                ))}
                            </div>
                        </Scrollbars>
                    </div>
                </div>
                <div class="az-content-right-chat-main">
                    <FastChat />
                    <Scrollbars style={{ height: '100%' }}>
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
                                <Loading />
                            )}
                        </div>
                    </Scrollbars>
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
    { fetchActiveUsers, fetchPostsAndUsers, toggleCreatePost }
)(MainPage);
