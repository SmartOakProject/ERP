import React from 'react';
import Linkify from 'react-linkify';
import { FaEllipsisH } from 'react-icons/fa';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { FaRegPaperPlane } from 'react-icons/fa';
import Message from '../common/Message';
const Post = ({ date, desc, imgSrc, user, comments }) => {
    return (
        <div class="post">
            <div class="post__header">
                <div className="d-flex align-items-center">
                    <img src="https://via.placeholder.com/500x500" alt="" />
                    <div className="ml-3">
                        <p className="post__name">{user ? user.name : null}</p>
                        <span className="post__date">
                            <Moment format="DD MMMM HH:mm">{date}</Moment>
                        </span>
                    </div>
                </div>
                <FaEllipsisH />
            </div>
            <div class="post__body">
                <div className="post__desc">
                    <Linkify>{desc}</Linkify>
                </div>
                <div class="post__img">
                    <img src="https://via.placeholder.com/500x500" alt="" />
                </div>
            </div>
            <div className="post__action">
                <div className="d-flex">
                    <span className="mr-2">Like</span>
                    <span>Comment</span>
                </div>
                <div className="d-flex">
                    <span className="mr-2">1000 Likes</span>
                    <span>50 comments</span>
                </div>
            </div>
            <div className="post__comments">
                <div class="post__msg">
                    <div className="az-img-user-post online">
                        <img src="https://via.placeholder.com/500x500" alt="" />
                    </div>
                    {/* <nav class="nav">
                        <a class="nav-link">
                            <FaCamera />
                        </a>
                        <a class="nav-link">
                            <FaPaperclip />
                        </a>
                        <a class="nav-link">
                            <FaSmile />
                        </a>
                    </nav> */}
                    <div className="input-wrapper">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Aa"
                        ></input>
                        <a href="" class="az-msg-send">
                            <FaRegPaperPlane />
                        </a>
                    </div>
                </div>

                <Message text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sit quia sapiente velit voluptate magnam totam ipsa, culpa iure in officia ipsum neque esse, temporibus amet iusto perferendis id repellendus?" />

                <div className="post__comments__more">
                    Load more comments (10)
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(Post);
