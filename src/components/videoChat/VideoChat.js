import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import {
    FaPhone,
    FaVideo,
    FaCamera,
    FaPaperclip,
    FaSmile,
    FaEllipsisV,
    FaRegPaperPlane,
    FaMicrophoneSlash,
    FaMicrophone,
    FaVideoSlash,
    FaCog,
    FaDesktop,
} from 'react-icons/fa';

import Message from 'components/common/Message';

const VideoChat = () => {
    return (
        <div className="video-chat-wrapper">
            <div className="video-main">
                <div className="users">
                    <div className="img-user">
                        <div className="muted">
                            <FaMicrophoneSlash />
                        </div>
                        <img src="https://via.placeholder.com/500x500" alt="" />
                    </div>
                    <div className="img-user">
                        <img src="https://via.placeholder.com/500x500" alt="" />
                    </div>
                    <div className="img-user">
                        <img src="https://via.placeholder.com/500x500" alt="" />
                    </div>
                    <div className="img-user">
                        <img src="https://via.placeholder.com/500x500" alt="" />
                    </div>
                    <div className="img-user">
                        <img src="https://via.placeholder.com/500x500" alt="" />
                    </div>
                </div>
                <div className="controles">
                    <a href="">
                        <FaDesktop />
                    </a>
                    <a href="">
                        <FaVideoSlash />
                    </a>

                    <a className="btn-disconect">ROZŁĄCZ</a>
                    <a href="">
                        <FaMicrophone />
                    </a>
                    <a href="">
                        <FaCog />
                    </a>
                </div>
            </div>
            <div className="voice-chat">
                <Scrollbars>
                    <div id="azChatBody" className="az-chat-body">
                        <div className="content-inner">
                            <Message imgSrc="https://via.placeholder.com/500x337" />
                            <Message text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ratione, commodi totam tempore excepturi error distinctio consectetur nam ea repellendus suscipit, sapiente aperiam necessitatibus aliquid laboriosam porro delectus nihil!" />

                            <Message imgSrc="https://via.placeholder.com/500x337" reversed />
                            <Message
                                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ratione, commodi totam tempore excepturi error distinctio consectetur nam ea repellendus suscipit, sapiente aperiam necessitatibus aliquid laboriosam porro delectus nihil!"
                                reversed
                            />
                        </div>
                    </div>
                </Scrollbars>
                <div className="az-chat-footer-main videoChat-footer">
                    <nav className="nav">
                        <a href="" className="nav-link" data-toggle="tooltip" title="Add Photo">
                            <FaCamera />
                        </a>
                        <a href="" className="nav-link" data-toggle="tooltip" title="Attach a File">
                            <FaPaperclip />
                        </a>
                        <a href="" className="nav-link" data-toggle="tooltip" title="Add Emoticons">
                            <FaSmile />
                        </a>
                        <a href="" className="nav-link">
                            <FaEllipsisV />
                        </a>
                    </nav>
                    <input
                        type="text"
                        className="form-control "
                        placeholder="Type your message here..."
                    />
                    <a href="" className="az-msg-send">
                        <FaRegPaperPlane />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default VideoChat;
