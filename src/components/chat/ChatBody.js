import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import Message from '../common/Message';
import {
    FaCamera,
    FaPaperclip,
    FaSmile,
    FaEllipsisV,
    FaRegPaperPlane,
    FaVideo,
    FaRegFileAlt,
    FaPhone
} from 'react-icons/fa';
const ChatBody = props => {
    return (
        <>
            <div className="az-chat-header">
                <div className="az-img-user">
                    <img src="https://via.placeholder.com/500x500" alt="" />
                </div>
                <div className="az-chat-msg-name">
                    <h6>Reynante Labares</h6>
                    <small>Last seen: 2 minutes ago</small>
                </div>
                <nav className="nav">
                    <Link class="nav-link" to="/main/voiceChat">
                        <FaPhone />
                    </Link>
                    <Link class="nav-link" to="/main/videoChat">
                        <FaVideo />
                    </Link>
                    <span className="nav-link">
                        <FaRegFileAlt onClick={() => props.toggleFiles(true)} />
                    </span>
                </nav>
            </div>

            <Scrollbars style={{ height: '100%' }}>
                <div id="azChatBody" className="az-chat-body">
                    <div className="content-inner">
                        {/* <label className="az-chat-time">
                            <span>3 days ago</span>
                        </label> */}

                        <Message imgSrc="https://via.placeholder.com/500x337" />
                        <Message text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ratione, commodi totam tempore excepturi error distinctio consectetur nam ea repellendus suscipit, sapiente aperiam necessitatibus aliquid laboriosam porro delectus nihil!" />

                        <Message
                            imgSrc="https://via.placeholder.com/500x337"
                            reversed
                        />
                        <Message
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ratione, commodi totam tempore excepturi error distinctio consectetur nam ea repellendus suscipit, sapiente aperiam necessitatibus aliquid laboriosam porro delectus nihil!"
                            reversed
                        />
                    </div>
                </div>
            </Scrollbars>

            <div class="az-chat-footer">
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
                <input
                    type="text"
                    class="form-control"
                    placeholder="Type your message here..."
                />
                <a href="" class="az-msg-send">
                    <FaRegPaperPlane />
                </a>
            </div>
        </>
    );
};

export default ChatBody;
