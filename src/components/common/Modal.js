import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { FiCamera, FiVideo, FiFileText } from 'react-icons/fi';
import { connect } from 'react-redux';
import Loading from '../common/Spinner';
import { toggleCreatePost } from '../../actions/index';
const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0'
    }
};

const ReactModal = props => {
    return ReactDOM.createPortal(
        <Modal
            isOpen={props.isOpen}
            onRequestClose={() => props.toggleCreatePost()}
            style={customStyles}
            ariaHideApp={false}
            contentLabel="Example Modal"
        >
            <div class="modal-content">
                <div class="modal-body">
                    <div class="modal-header">
                        <div className="modal-avatar">
                            <div className="az-img-user-post online">
                                <img
                                    src="https://via.placeholder.com/500x500"
                                    alt=""
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span
                                aria-hidden="true"
                                onClick={() => props.toggleCreatePost()}
                            >
                                &times;
                            </span>
                        </button>
                    </div>

                    <div class="form-group">
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Post desc"
                        ></textarea>
                    </div>

                    <div className="modal-footer">
                        <div className="modal-actions">
                            <FiCamera />
                            <FiVideo />
                            <FiFileText />
                        </div>

                        <button
                            type="submit"
                            class="btn btn-primary modal-send"
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </Modal>,
        document.querySelector('#modal')
    );
};
const mapStateToProps = state => {
    return { isOpen: state.setup.isCreatePostOpen };
};
export default connect(
    mapStateToProps,
    { toggleCreatePost }
)(ReactModal);
