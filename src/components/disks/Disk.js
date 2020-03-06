import React from 'react';
import PropTypes from 'prop-types';
import { FaFolder } from 'react-icons/fa';

const Disk = ({ diskName }) => {
    return (
        <div className="col-sm-6 col-lg-3">
            <button className="disks-button" type="button">
                <FaFolder />
                <span>{diskName}</span>
            </button>
        </div>
    );
};
Disk.propTypes = {
    diskName: PropTypes.string.isRequired,
};
export default Disk;
