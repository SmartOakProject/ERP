import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaTrash, FaDotCircle } from 'react-icons/fa';
import { openFastChat, toggleMainChat } from 'actions/index';

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
    activeUserId,
    isChat,
    toggleMainChat,
}) => {
    const className = activeUserId === id ? 'media selected' : 'media';

    const onUserClick = () => {
        if (isChat) {
            toggleMainChat();
        } else {
            // isMainPage
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
                <p>{email}</p>
            </div>
        </div>
    );
};
User.propTypes = {
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.number,
    email: PropTypes.string,
    icons: PropTypes.bool,
    openFastChat: PropTypes.func,
    activeUserId: PropTypes.number,
    isChat: PropTypes.bool,
    toggleMainChat: PropTypes.func,
};
const mapStateToProps = state => {
    return {
        activeUserId: state.fastChat.idUserSelected,
    };
};
export default connect(mapStateToProps, { openFastChat, toggleMainChat })(User);
