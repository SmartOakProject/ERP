import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Collapse, { Panel } from 'es';
import { fetchNavigation } from 'actions/index';
import Spinner from 'components/common/Spinner';
import Icon from './Icon';

const Navigation = ({ navigation, fetchNavigation }) => {
    const [activeKey, setActiveKey] = useState(null);

    useEffect(() => {
        fetchNavigation();
    }, []);

    const onChange = activeKey => {
        setActiveKey(activeKey);
    };

    const nav = navigation.map(e => {
        return (
            <Panel header={e.header} headerIcon={<Icon tag={e.headerIcon} />}>
                <nav>
                    {e.links.map((e, i) => {
                        return e.links ? (
                            <Collapse key={i} defaultActiveKey="1">
                                <Panel header={e.name} headerClass="nav-second">
                                    {e.links.map(e => (
                                        <NavLink to={e.url} className="nav-sub-link">
                                            {e.name}
                                        </NavLink>
                                    ))}
                                </Panel>
                            </Collapse>
                        ) : (
                            <NavLink to={e.url} className="nav-sub-link" activeClassName="active">
                                {e.name}
                            </NavLink>
                        );
                    })}
                </nav>
            </Panel>
        );
    });
    return (
        <Collapse accordion onChange={onChange} activeKey={activeKey}>
            {navigation.length === 0 ? <Spinner /> : nav}
        </Collapse>
    );
};
Navigation.propTypes = {
    navigation: PropTypes.shape({
        id: PropTypes.number.isRequired,
        header: PropTypes.number.isRequired,
        headerIcon: PropTypes.number.isRequired,
        links: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
                links: PropTypes.arrayOf(PropTypes.object),
            }),
        ).isRequired,
    }),
    fetchNavigation: PropTypes.func.isRequired,
};
const mapStateToProps = state => {
    return {
        navigation: state.navigation,
    };
};
export default connect(mapStateToProps, { fetchNavigation })(Navigation);
