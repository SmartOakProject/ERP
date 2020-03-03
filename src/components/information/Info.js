import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Collapse, { Panel } from '../../es';
import { Scrollbars } from 'react-custom-scrollbars';
//todo
export default class Info extends Component {
    state = {
        activeKey: null
    };

    onChange = activeKey => {
        this.setState({
            activeKey
        });
    };

    render() {
        const activeKey = this.state.activeKey;
        return (
            <div className="info-container">
                <Scrollbars style={{ width: '100%', height: 'auto' }}>
                    <div className="info">
                        <Collapse
                            accordion
                            onChange={this.onChange}
                            activeKey={activeKey}
                            showArrow="false"
                            // className="nav-link"
                        >
                            <h2>Ogólne</h2>
                            <Panel header="Board">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore cupiditate earum
                                    ut debitis cum laudantium iste incidunt
                                    officiis! Eum dolorem laboriosam officiis
                                    maiores nobis provident mollitia iusto
                                    molestiae vel repellendus!
                                </p>
                            </Panel>
                            <h2>Next</h2>

                            <Panel header="Tools">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore cupiditate earum
                                    ut debitis cum laudantium iste incidunt
                                    officiis! Eum dolorem laboriosam officiis
                                    maiores nobis provident mollitia iusto
                                    molestiae vel repellendus!
                                </p>
                            </Panel>

                            <Panel header="Management">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore cupiditate earum
                                    ut debitis cum laudantium iste incidunt
                                    officiis! Eum dolorem laboriosam officiis
                                    maiores nobis provident mollitia iusto
                                    molestiae vel repellendus!
                                </p>
                            </Panel>

                            <Panel header="Basics">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore cupiditate earum
                                    ut debitis cum laudantium iste incidunt
                                    officiis! Eum dolorem laboriosam officiis
                                    maiores nobis provident mollitia iusto
                                    molestiae vel repellendus!
                                </p>
                            </Panel>

                            <Panel header="Major Events">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore cupiditate earum
                                    ut debitis cum laudantium iste incidunt
                                    officiis! Eum dolorem laboriosam officiis
                                    maiores nobis provident mollitia iusto
                                    molestiae vel repellendus!
                                </p>
                            </Panel>
                            <h2>Next</h2>

                            <Panel header="Tools">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore cupiditate earum
                                    ut debitis cum laudantium iste incidunt
                                    officiis! Eum dolorem laboriosam officiis
                                    maiores nobis provident mollitia iusto
                                    molestiae vel repellendus!
                                </p>
                            </Panel>

                            <Panel header="Management">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore cupiditate earum
                                    ut debitis cum laudantium iste incidunt
                                    officiis! Eum dolorem laboriosam officiis
                                    maiores nobis provident mollitia iusto
                                    molestiae vel repellendus!
                                </p>
                            </Panel>

                            <Panel header="Basics">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore cupiditate earum
                                    ut debitis cum laudantium iste incidunt
                                    officiis! Eum dolorem laboriosam officiis
                                    maiores nobis provident mollitia iusto
                                    molestiae vel repellendus!
                                </p>
                            </Panel>

                            <Panel header="Major Events">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore cupiditate earum
                                    ut debitis cum laudantium iste incidunt
                                    officiis! Eum dolorem laboriosam officiis
                                    maiores nobis provident mollitia iusto
                                    molestiae vel repellendus!
                                </p>
                            </Panel>
                            <h2>Next</h2>

                            <Panel header="Tools">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore cupiditate earum
                                    ut debitis cum laudantium iste incidunt
                                    officiis! Eum dolorem laboriosam officiis
                                    maiores nobis provident mollitia iusto
                                    molestiae vel repellendus!
                                </p>
                            </Panel>

                            <Panel header="Management">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore cupiditate earum
                                    ut debitis cum laudantium iste incidunt
                                    officiis! Eum dolorem laboriosam officiis
                                    maiores nobis provident mollitia iusto
                                    molestiae vel repellendus!
                                </p>
                            </Panel>

                            <Panel header="Basics">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore cupiditate earum
                                    ut debitis cum laudantium iste incidunt
                                    officiis! Eum dolorem laboriosam officiis
                                    maiores nobis provident mollitia iusto
                                    molestiae vel repellendus!
                                </p>
                            </Panel>

                            <Panel header="Major Events">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore cupiditate earum
                                    ut debitis cum laudantium iste incidunt
                                    officiis! Eum dolorem laboriosam officiis
                                    maiores nobis provident mollitia iusto
                                    molestiae vel repellendus!
                                </p>
                            </Panel>
                        </Collapse>
                    </div>
                </Scrollbars>
            </div>
        );
    }
}
