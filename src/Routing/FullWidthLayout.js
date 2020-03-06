import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/navigation';

const FullWidthLayout = ({ children }) => {
    return (
        <div className="content-full">
            <Navigation fullWidth />
            {children}
        </div>
    );
};

FullWidthLayout.propTypes = {
    children: PropTypes.element,
};

export default FullWidthLayout;
