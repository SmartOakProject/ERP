import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import Disk from './Disk';
const Disks = () => {
    return (
        <div className="disks">
            <Scrollbars style={{ height: '100%' }}>
                <h2>Neuron Fundation</h2>
                <div class="row row-xs m-0 disks-wrapper">
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                </div>

                <h2>New Neuronpsychiatry</h2>
                <div class="row row-xs m-0 disks-wrapper">
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                </div>

                <h2>NeuroN Direction</h2>
                <div class="row row-xs m-0 disks-wrapper">
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                </div>
                <h2>NeuroN Direction</h2>
                <div class="row row-xs m-0 disks-wrapper">
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                </div>
                <h2>NeuroN Direction</h2>
                <div class="row row-xs m-0 disks-wrapper">
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                    <Disk diskName="folder" />
                </div>
            </Scrollbars>
        </div>
    );
};
export default Disks;
