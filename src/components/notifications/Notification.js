import React from 'react';
import { FaRegThumbsUp, FaRegTrashAlt } from 'react-icons/fa';

const Notification = () => {
    return (
        <div className="media">
            <div className="az-img-user notif-user ">
                <img src="https://via.placeholder.com/500x500" alt="" />
            </div>
            <div className="media-body">
                <div className="media-contact-name">
                    <span>
                        <strong>Strona Smart Oak Project</strong> ma nowe wyświetlenia: 1 000 000.
                    </span>
                    <span>2 hours</span>
                </div>
                <div className="notif-action">
                    <a href="">
                        <FaRegThumbsUp />
                        Lubie to
                    </a>
                    <a href="">
                        <FaRegTrashAlt />
                        Odrzuć
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Notification;
