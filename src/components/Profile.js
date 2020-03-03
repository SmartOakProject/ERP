import React, { useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import Post from './mainPage/Post';
import Spinner from './common/Spinner';
import { fetchUserPosts, fetchUser } from '../actions/index';
import RolesList from './common/RolesList';
import {
    IoLogoGithub,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoMdLink
} from 'react-icons/io';
import {
    FaCamera,
    FaPaperclip,
    FaSmile,
    FaEllipsisV,
    FaRegPaperPlane,
    FaRegEdit,
    FaPhone,
    FaVideo
} from 'react-icons/fa';

const Profile = props => {
    useEffect(() => {
        props.fetchUserPosts(props.match.params.id);
        props.fetchUser(props.match.params.id);
    }, []);

    const renderPosts = () => {
        return props.posts.length ? (
            props.posts.map(e => (
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
            ))
        ) : (
            <Spinner />
        );
    };
    if (!props.user) {
        return <Spinner />;
    }
    return (
        <Scrollbars className="scrollbar-profile">
            <div className="profile-content">
                <div className="az-content-left-profile">
                    <div className="az-profile-overview">
                        <div className="az-img-user">
                            <img
                                src="https://via.placeholder.com/500x500"
                                alt=""
                            />
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                                <h5 className="az-profile-name">
                                    {props.user.name}
                                </h5>
                                <p className="az-profile-name-text">
                                    {props.user.company.bs}
                                </p>
                            </div>
                            <div className="btn-icon-list">
                                <button className="btn-indigo btn-icon">
                                    <FaPhone />
                                </button>
                                <button className="btn-primary btn-icon">
                                    <FaVideo />
                                </button>
                            </div>
                        </div>

                        <label className="az-content-label mt-4 mb-4">
                            Websites &amp; Social Channel
                        </label>
                        <div className="az-profile-social-list">
                            <a href="" className="media-icon">
                                <IoLogoGithub />
                            </a>
                            <a href="" className="media-icon">
                                <IoLogoTwitter />
                            </a>
                            <a href="" className="media-icon">
                                <IoLogoLinkedin />
                            </a>
                            <a href="" className="media-icon">
                                <IoMdLink />
                            </a>
                            <a href="" className="media-icon">
                                <IoMdLink />
                            </a>
                        </div>
                        <label className="az-content-label mt-4 mb-2">
                            Description
                        </label>
                        <div className="az-profile-bio mt-3">
                            {props.user.company.catchPhrase}
                        </div>
                    </div>
                </div>

                <div className="az-content-body-posts">
                    <div id="azChatBody" className="az-chat-body-main">
                        <Scrollbars style={{ height: '100%' }}>
                            <div className="az-chat-footer-main">
                                <div>
                                    <span
                                        className="create-post"
                                        onClick={() => props.toggleCreatePost()}
                                    >
                                        <FaRegEdit className="mr-2" />
                                        Create a post
                                    </span>
                                </div>
                                <nav className="nav">
                                    <a
                                        href=""
                                        className="nav-link"
                                        data-toggle="tooltip"
                                        title="Add Photo"
                                    >
                                        <FaCamera />
                                    </a>
                                    <a
                                        href=""
                                        className="nav-link"
                                        data-toggle="tooltip"
                                        title="Attach a File"
                                    >
                                        <FaPaperclip />
                                    </a>
                                    <a
                                        href=""
                                        className="nav-link"
                                        data-toggle="tooltip"
                                        title="Add Emoticons"
                                    >
                                        <FaSmile />
                                    </a>
                                    <a href="" className="nav-link">
                                        <FaEllipsisV />
                                    </a>
                                </nav>
                            </div>
                            <div className="content-inner">{renderPosts()}</div>
                        </Scrollbars>
                    </div>
                </div>

                <RolesList />
            </div>
        </Scrollbars>
    );
};
const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts.map(e => e.id === ownProps.match.params.id && e),
        user: state.users[0]
    };
};
export default connect(
    mapStateToProps,
    { fetchUserPosts, fetchUser }
)(Profile);
