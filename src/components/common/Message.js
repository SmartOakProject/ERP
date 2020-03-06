import React from 'react';
import Linkify from 'react-linkify';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Message = ({ text, reversed, imgSrc }) => {
    return (
        <div
            className={classNames('message', {
                'flex-row-reverse': reversed,
            })}
        >
            <div className="az-img-user-post">
                {/* <img src=`https://via.placeholder.com/user/${userId}` alt="user" /> */}
                <img src="https://via.placeholder.com/500x500" alt="" />
            </div>
            <div className="media-body">
                <div className="msg-body">
                    {imgSrc ? (
                        <div className="az-msg-wrapper p-0">
                            <img src={imgSrc} alt="" className="image-message" />
                        </div>
                    ) : (
                        <div className="az-msg-wrapper">
                            <Linkify>{text}</Linkify>
                        </div>
                    )}
                </div>
                <i className="fas fa-ellipsis-h " />
                {/* <div>
                    <span>{date}</span>
                </div> */}
            </div>
        </div>
    );
};
Message.propTypes = {
    text: PropTypes.string.isRequired,
    reversed: PropTypes.bool,
    imgSrc: PropTypes.string,
};
export default Message;
