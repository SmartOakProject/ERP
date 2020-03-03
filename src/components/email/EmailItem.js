import React from 'react';

const EmailItem = props => {
    return (
        <div className="az-mail-item unread">
            <div className="az-mail-checkbox">
                <label className="ckbox">
                    <input type="checkbox" />
                    <span></span>
                </label>
            </div>
            <div className="az-mail-star">
                <i className="typcn typcn-star"></i>
            </div>
            <div className="az-img-user">
                <img src="https://via.placeholder.com/500x500" alt="" />
            </div>
            <div className="az-mail-body">
                <div className="az-mail-from">Adrian Monino</div>
                <div className="az-mail-subject">
                    <strong>Someone who believes in you</strong>
                    <span>
                        enean commodo li gula eget dolor cum socia eget dolor
                        enean commodo li gula eget dolor cum socia eget dolor
                    </span>
                </div>
            </div>
            <div className="az-mail-attachment">
                <i className="typcn typcn-attachment"></i>
            </div>
            <div className="az-mail-date">11:30am</div>
        </div>
    );
};

export default EmailItem;
