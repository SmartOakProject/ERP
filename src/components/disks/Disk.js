import React from 'react';
import { FaFolder } from 'react-icons/fa';

const Disk = ({ diskName }) => {
    return (
        <div class="col-sm-6 col-lg-3">
            <button class="disks-button ">
                <FaFolder />
                <span>{diskName}</span>
            </button>
        </div>
    );
};
export default Disk;
