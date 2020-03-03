import React from 'react';
import Navigation from '../components/navigation';
const FullWidthLayout = ({ children }) => {
    return (
        <div className="content-full">
            <Navigation fullWidth />
            {children}
        </div>
    );
};

export default FullWidthLayout;
