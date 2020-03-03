import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames';
import Message from './Message';
import { openFastChat, closeFastChat } from '../../actions/index';

import {
    FaPhone,
    FaVideo,
    FaCamera,
    FaPaperclip,
    FaSmile,
    FaEllipsisV,
    FaRegPaperPlane
} from 'react-icons/fa';
import { IoMdClose, IoIosSettings } from 'react-icons/io';

const FastChat = props => {
    if (!props.user) {
        return null;
    }
    return (
        <div
            class="small-chat"
            className={classNames('small-chat', {
                'd-none': !props.isOpen
            })}
        >
            <div class="small-chat-header">
                <div class="az-img-user">
                    <img src="https://via.placeholder.com/500x500" alt="" />
                </div>
                <div class="chat-msg-name">
                    <Link to={`/head/profile/${props.user.id}`}>
                        <h6>{props.user.name}</h6>
                    </Link>
                </div>
                <nav class="nav">
                    <Link class="nav-link" to="/main/voiceChat">
                        <FaPhone />
                    </Link>
                    <Link class="nav-link" to="/main/videoChat">
                        <FaVideo />
                    </Link>
                    <a href="" class="nav-link">
                        <IoIosSettings />
                    </a>
                    <div onClick={() => props.closeFastChat()} class="nav-link">
                        <IoMdClose />
                    </div>
                </nav>
            </div>
            <div class="small-chat-body">
                <Scrollbars style={{ height: '85%' }}>
                    <div class="content-inner">
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
                </Scrollbars>

                <div class="small-chat-footer">
                    <nav class="nav">
                        <a class="nav-link">
                            <FaCamera />
                        </a>
                        <a class="nav-link">
                            <FaPaperclip />
                        </a>
                        <a class="nav-link">
                            <FaSmile />
                        </a>
                    </nav>
                    <input type="text" class="form-control " placeholder="Aa" />
                    <a href="" class="az-msg-send">
                        <FaRegPaperPlane />
                    </a>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        isOpen: state.fastChat.isOpen,
        user: state.activeUsers.find(
            user => user.id === state.fastChat.idUserSelected
        )
    };
};
export default connect(
    mapStateToProps,
    { openFastChat, closeFastChat }
)(FastChat);
