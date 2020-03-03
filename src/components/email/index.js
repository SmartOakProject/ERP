import React from 'react';
import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import EmailItem from './EmailItem';
import {
    TiMail,
    TiStarOutline,
    TiBookmark,
    TiArrowForwardOutline,
    TiCancelOutline,
    TiPen,
    TiTrash,
    TiFolder,
    TiChevronLeft,
    TiArrowSync,
    TiChevronRight,
    TiTag,
    TiArrowRight,
    TiArrowLeft,
    TiPlus
} from 'react-icons/ti';
import { IoIosClose } from 'react-icons/io';

export default class Email extends React.Component {
    state = { view: false, compose: false };

    toggleInbox = () => {
        if (window.innerWidth < 1000) {
            this.setState(prevState => ({
                view: !prevState.view
            }));
        }
    };

    onButtonClick = () => {
        this.setState({ compose: true });
    };

    onCloseClick = () => {
        this.setState({ compose: false });
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ compose: false });
        }
    };
    setWrapperRef = node => {
        this.wrapperRef = node;
    };
    render() {
        return (
            <div
                className={classNames('az-content-body content-padding', {
                    'inbox-show': this.state.view
                })}
            >
                <div className="az-content-left-mail">
                    <a
                        onClick={this.onButtonClick}
                        id="btnCompose"
                        className="btn btn-az-primary btn-compose"
                    >
                        Compose
                    </a>

                    <Scrollbars style={{ height: '91%' }}>
                        <div className="az-mail-menu">
                            <nav className="nav az-nav-column">
                                <a
                                    onClick={this.toggleInbox}
                                    className="nav-link active"
                                >
                                    <TiMail className="typcn" /> Inbox
                                    <span>20</span>
                                </a>
                                <a
                                    onClick={this.toggleInbox}
                                    className="nav-link active"
                                >
                                    <TiMail /> Inbox
                                    <span>20</span>
                                </a>
                                <a
                                    onClick={this.toggleInbox}
                                    className="nav-link"
                                >
                                    <TiStarOutline /> Starred
                                    <span>3</span>
                                </a>
                                <a
                                    onClick={this.toggleInbox}
                                    className="nav-link"
                                >
                                    <TiBookmark /> Important
                                    <span>10</span>
                                </a>
                                <a
                                    onClick={this.toggleInbox}
                                    className="nav-link"
                                >
                                    <TiArrowForwardOutline />
                                    Sent Mail
                                    <span>8</span>
                                </a>
                                <a
                                    onClick={this.toggleInbox}
                                    className="nav-link"
                                >
                                    <TiPen /> Drafts
                                    <span>15</span>
                                </a>
                                <a
                                    onClick={this.toggleInbox}
                                    className="nav-link"
                                >
                                    <TiCancelOutline /> Spam
                                    <span>128</span>
                                </a>
                                <a
                                    onClick={this.toggleInbox}
                                    className="nav-link"
                                >
                                    <TiTrash /> Trash
                                    <span>6</span>
                                </a>
                            </nav>

                            <label className="az-content-label az-content-label-sm">
                                Label
                            </label>
                            <nav className="nav az-nav-column">
                                <a href="#" className="nav-link">
                                    <TiFolder /> Project A
                                </a>
                                <a href="#" className="nav-link">
                                    <TiFolder /> Project B
                                </a>
                                <a href="#" className="nav-link">
                                    <TiFolder /> Project C
                                </a>
                                <a href="#" className="nav-link">
                                    <TiFolder /> Project D
                                </a>
                            </nav>

                            <label className="az-content-label az-content-label-sm">
                                Mails
                            </label>
                            <nav className="nav az-nav-column">
                                <a href="#" className="nav-link">
                                    lucasdabraowski@gmail.com <span>221</span>
                                </a>
                                <a href="#" className="nav-link">
                                    lucasdabraowski@onet.com <span>323</span>
                                </a>
                                <a href="#" className="nav-link">
                                    lucasdabraowski@wp.com <span>173</span>
                                </a>
                                <a href="#" className="nav-link add-mail">
                                    <TiPlus /> dodaj kolejnego maila
                                </a>
                            </nav>
                        </div>
                    </Scrollbars>
                </div>
                <div className={classNames('az-content-body-mail')}>
                    <TiArrowLeft
                        onClick={this.toggleInbox}
                        className="arrow-emial"
                    />
                    <div className="az-mail-header">
                        <div>
                            <div>
                                <h4>Inbox</h4>
                                <p>You have 2 unread messages</p>
                            </div>
                        </div>
                        <div>
                            <span>1-50 of 1200</span>
                            <div className="btn-group" role="group">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary disabled"
                                >
                                    <TiChevronLeft />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                >
                                    <TiChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="az-mail-options">
                        <label className="ckbox">
                            <input id="checkAll" type="checkbox" />
                            <span></span>
                        </label>
                        <div className="btn-group">
                            <button className="btn btn-light">
                                <TiArrowSync
                                    style={{ width: '24px', height: '24px' }}
                                />
                            </button>
                            <button className="btn btn-light disabled">
                                <TiTrash className="ask-user" />
                            </button>
                            <button className="btn btn-light disabled">
                                <TiTag />
                            </button>
                        </div>
                    </div>
                    <Scrollbars style={{ height: '81%' }}>
                        <div className="az-mail-list">
                            <EmailItem />
                            <EmailItem />
                            <EmailItem />
                            <EmailItem />
                            <EmailItem />
                            <EmailItem />
                            <EmailItem />
                            <EmailItem />
                        </div>
                    </Scrollbars>

                    {/* <div className="mb-lg-5"></div> */}
                </div>
                <div
                    className={classNames('az-mail-compose', {
                        'd-block': this.state.compose
                    })}
                >
                    <div>
                        <div class="container">
                            <div
                                ref={this.setWrapperRef}
                                class="az-mail-compose-box"
                            >
                                <div class="az-mail-compose-header">
                                    <span>New Message</span>
                                    <nav class="nav">
                                        <a href="" class="nav-link">
                                            <i class="fas fa-minus"></i>
                                        </a>
                                        <a href="" class="nav-link">
                                            <i class="fas fa-compress"></i>
                                        </a>
                                        <IoIosClose
                                            onClick={this.onCloseClick}
                                        />
                                    </nav>
                                </div>
                                <div class="az-mail-compose-body">
                                    <div class="form-group">
                                        <label class="form-label">To</label>
                                        <div>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Enter recipient's email address"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">
                                            Subject
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <textarea
                                            class="form-control"
                                            rows="8"
                                            placeholder="Write your message here..."
                                        ></textarea>
                                    </div>
                                    <div class="form-group">
                                        <nav class="nav">
                                            <a
                                                href=""
                                                class="nav-link"
                                                data-toggle="tooltip"
                                                title="Add attachment"
                                            >
                                                <i class="fas fa-paperclip"></i>
                                            </a>
                                            <a
                                                href=""
                                                class="nav-link"
                                                data-toggle="tooltip"
                                                title="Add photo"
                                            >
                                                <i class="far fa-image"></i>
                                            </a>
                                            <a
                                                href=""
                                                class="nav-link"
                                                data-toggle="tooltip"
                                                title="Add link"
                                            >
                                                <i class="fas fa-link"></i>
                                            </a>
                                            <a
                                                href=""
                                                class="nav-link"
                                                data-toggle="tooltip"
                                                title="Emoticons"
                                            >
                                                <i class="far fa-smile"></i>
                                            </a>
                                            <a
                                                href=""
                                                class="nav-link"
                                                data-toggle="tooltip"
                                                title="Discard"
                                            >
                                                <i class="far fa-trash-alt"></i>
                                            </a>
                                        </nav>
                                        <button class="btn btn-primary">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
