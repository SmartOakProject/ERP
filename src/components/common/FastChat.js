import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames';
import { FaPhone, FaVideo, FaCamera, FaPaperclip, FaSmile, FaRegPaperPlane } from 'react-icons/fa';
import { IoMdClose, IoIosSettings } from 'react-icons/io';
import PropTypes from 'prop-types';
import { openFastChat, closeFastChat } from 'actions/index';
import Message from './Message';

const FastChat = ({ user, isOpen, closeFastChat }) => {
    if (!user) {
        return null;
    }
    const onCloseClick = () => {
        closeFastChat();
    };

    return (
        <div
            className={classNames('small-chat', {
                'd-none': !isOpen,
            })}
        >
            <div className="small-chat-header">
                <div className="az-img-user">
                    <img src="https://via.placeholder.com/500x500" alt="" />
                </div>
                <div className="chat-msg-name">
                    <Link to={`/head/profile/${user.id}`}>
                        <h6>{user.name}</h6>
                    </Link>
                </div>
                <nav className="nav">
                    <Link className="nav-link" to="/main/voiceChat">
                        <FaPhone />
                    </Link>
                    <Link className="nav-link" to="/main/videoChat">
                        <FaVideo />
                    </Link>
                    <a href className="nav-link">
                        <IoIosSettings />
                    </a>
                    <a href onClick={onCloseClick} className="nav-link">
                        <IoMdClose />
                    </a>
                </nav>
            </div>
            <div className="small-chat-body">
                <Scrollbars style={{ height: '85%' }}>
                    <div className="content-inner">
                        <Message imgSrc="https://via.placeholder.com/500x337" />
                        <Message text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ratione, commodi totam tempore excepturi error distinctio consectetur nam ea repellendus suscipit, sapiente aperiam necessitatibus aliquid laboriosam porro delectus nihil!" />

                        <Message imgSrc="https://via.placeholder.com/500x337" reversed />
                        <Message
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ratione, commodi totam tempore excepturi error distinctio consectetur nam ea repellendus suscipit, sapiente aperiam necessitatibus aliquid laboriosam porro delectus nihil!"
                            reversed
                        />
                    </div>
                </Scrollbars>

                <div className="small-chat-footer">
                    <nav className="nav">
                        <a href="/" className="nav-link">
                            <FaCamera />
                        </a>
                        <a href="/" className="nav-link">
                            <FaPaperclip />
                        </a>
                        <a href="/" className="nav-link">
                            <FaSmile />
                        </a>
                    </nav>
                    <input type="text" className="form-control " placeholder="Aa" />
                    <a href="/" className="az-msg-send">
                        <FaRegPaperPlane />
                    </a>
                </div>
            </div>
        </div>
    );
};
FastChat.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }),
    isOpen: PropTypes.bool,
    closeFastChat: PropTypes.func.isRequired,
};
const mapStateToProps = state => {
    return {
        isOpen: state.fastChat.isOpen,
        user: state.activeUsers.find(user => user.id === state.fastChat.idUserSelected),
    };
};
export default connect(mapStateToProps, { openFastChat, closeFastChat })(FastChat);
