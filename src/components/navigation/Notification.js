import React from 'react';

import { FaRegTrashAlt, FaDotCircle } from 'react-icons/fa';

const Notification = ({ text, data }) => {
    return (
        <div className="media">
            <div className="az-img-user-post">
                <img src="https://via.placeholder.com/500x500" alt="" />
            </div>
            <div className="media-body d-flex">
                <div>
                    <p>{text}</p>
                    <span>{data}</span>
                </div>
                <div>
                    <FaRegTrashAlt />
                    <FaDotCircle />
                </div>
            </div>
        </div>
    );
};
export default Notification;
