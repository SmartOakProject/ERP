import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FaRegClock, FaRegEnvelope, FaMobileAlt } from 'react-icons/fa';
import {
    TiDevicePhone,
    TiEdit,
    TiUserAddOutline,
    TiCancel,
    TiMessages,
    TiTrash,
    TiCameraOutline,
} from 'react-icons/ti';
import RolesList from 'components/common/RolesList';
import Chart from './Chart';
import Contact from './Contact';

const Participants = () => {
    return (
        <div className="az-content-body participants az-content-body-show">
            <div className="az-content-left az-content-left-contacts">
                <h2 className="az-content-title mb-3">Contacts</h2>
                <nav className="nav az-nav-line az-nav-line-chat">
                    <a href="" data-toggle="tab" className="nav-link active">
                        All Contacts
                    </a>
                    <a href="" data-toggle="tab" className="nav-link">
                        Groups
                    </a>
                </nav>
                <Scrollbars style={{ height: '89%' }}>
                    <div id="azContactList" className="az-contacts-list">
                        <div className="az-contact-label">A</div>
                        <Contact />
                        <div className="az-contact-label">B</div>
                        <Contact />
                        <div className="az-contact-label">C</div>
                        <Contact />
                    </div>
                </Scrollbars>
            </div>
            <Scrollbars style={{ height: '99%' }}>
                <div className="az-content-body-contacts">
                    <div className="az-contact-info-header">
                        <div className="media">
                            <div className="az-img-user">
                                <img src="https://via.placeholder.com/500x500" alt="" />
                                <a href="">
                                    <TiCameraOutline />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4>Abigail Johnson</h4>
                                <p>Product Designer</p>
                                <nav className="nav">
                                    <a href="" className="nav-link">
                                        <TiDevicePhone />
                                        Call
                                    </a>

                                    <a href="" className="nav-link">
                                        <TiMessages /> Message
                                    </a>
                                    <a href="" className="nav-link add-group">
                                        <TiUserAddOutline />
                                        Add to Group
                                    </a>
                                    <li className="nav-link block-button">
                                        <TiCancel />
                                        Block
                                    </li>
                                    <a href="" className="nav-link edit-contact">
                                        <TiEdit /> Edit Contact
                                    </a>
                                    <a href="" className="nav-link delete-contact">
                                        <TiTrash />
                                        Delete Contact
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="az-contact-info-body">
                        <div className="media-list">
                            <nav className="nav az-nav-line-part">
                                <a href="" className="nav-link active" data-toggle="tab">
                                    Week
                                </a>
                                <a href="" className="nav-link" data-toggle="tab">
                                    Month
                                </a>
                                <a href="" className="nav-link" data-toggle="tab">
                                    Year
                                </a>
                            </nav>

                            <div className="mb-2">
                                <div className="az-profile-view-chart">
                                    <Chart className="chart" />
                                    <div className="az-profile-view-info">
                                        <div className="d-flex align-items-baseline">
                                            <h6>508</h6>
                                            <span>-1.2% since last week</span>
                                        </div>
                                        <p>Profile viewers past 10 days</p>
                                    </div>
                                </div>
                            </div>

                            <div className="media">
                                <div className="media-icon">
                                    <FaMobileAlt />
                                </div>
                                <div className="media-body-info">
                                    <div>
                                        <span>+1 (234) 567 8901</span>
                                    </div>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-icon align-self-start">
                                    <FaRegEnvelope />
                                </div>
                                <div className="media-body-info">
                                    <div>
                                        <span>abigail.johnson@gmail.com</span>
                                    </div>
                                </div>
                            </div>

                            <div className="media">
                                <div className="media-icon">
                                    <FaRegClock />
                                </div>
                                <div className="media-body-info">
                                    <div>
                                        <span>1865 h</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <RolesList />
                    </div>
                </div>
            </Scrollbars>
        </div>
    );
};
export default Participants;
