import React from 'react';

import { FaTrash, FaDotCircle } from 'react-icons/fa';
import { openFastChat, toggleMainChat } from '../../actions/index';
import { connect } from 'react-redux';

// az-img-user online = true // green online circle
// media new=true //red circle

const User = ({
    id,
    imgSrc,
    name,
    date,
    email,
    icons,
    openFastChat,
    activeUser,
    isChat,
    toggleMainChat
}) => {
    const className = activeUser === id ? 'media selected' : 'media';

    const onUserClick = () => {
        if (isChat) {
            toggleMainChat();
        } else {
            //isMainPage
            openFastChat(id);
        }
    };

    return (
        <div className={className} onClick={onUserClick}>
            <div className="az-img-user">
                <img src="https://via.placeholder.com/500x500" alt="" />
                {/* <span>2</span> new messages number when new = true */}
            </div>
            <div className="media-body">
                <h6 className="mb-0"></h6>
                <div className="media-contact-name">
                    <span>{name}</span>
                    <span>{`${date} days`}</span>
                    {icons ? (
                        <div className="media-contact-icons">
                            <FaTrash />
                            <FaDotCircle />
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <p>{email ? email : null}</p>
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        activeUser: state.fastChat.idUserSelected
    };
};
export default connect(
    mapStateToProps,
    { openFastChat, toggleMainChat }
)(User);
