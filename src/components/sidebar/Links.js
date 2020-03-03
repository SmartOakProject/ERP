import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Collapse, { Panel } from '../../es';
import { fetchNavigation } from '../../actions/index';
import Spinner from '../common/Spinner';
import Icon from './Icon';

const Navigation = props => {
    const [activeKey, setActiveKey] = useState(null);

    useEffect(() => {
        props.fetchNavigation();
    }, []);

    const onChange = activeKey => {
        setActiveKey(activeKey);
    };

    const navigation = props.navigation.map(e => {
        return (
            <Panel header={e.header} headerIcon={<Icon tag={e.headerIcon} />}>
                <nav>
                    {e.links.map((e, i) => {
                        if (e.links) {
                            return (
                                <Collapse key={i} defaultActiveKey="1">
                                    <Panel
                                        header={e.name}
                                        headerClass="nav-second"
                                    >
                                        {e.links.map(e => (
                                            <NavLink
                                                to={e.url}
                                                className="nav-sub-link"
                                            >
                                                {e.name}
                                            </NavLink>
                                        ))}
                                    </Panel>
                                </Collapse>
                            );
                        } else {
                            return (
                                <NavLink
                                    to={e.url}
                                    className="nav-sub-link"
                                    activeClassName="active"
                                >
                                    {e.name}
                                </NavLink>
                            );
                        }
                    })}
                </nav>
            </Panel>
        );
    });
    return (
        <Collapse accordion onChange={onChange} activeKey={activeKey}>
            {navigation.length === 0 ? <Spinner /> : navigation}
        </Collapse>
    );
};

const mapStateToProps = state => {
    return {
        navigation: state.navigation
    };
};
export default connect(
    mapStateToProps,
    { fetchNavigation }
)(Navigation);
