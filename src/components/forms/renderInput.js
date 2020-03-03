import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
const renderError = ({ error, touched }) => {
    if (error && touched) {
        return <li className="parsley-required">{error}</li>;
    }
};

const renderInput = ({
    input,
    meta,
    placeholder,
    tag: Tag = 'input',
    customType,
    label,
    underText
}) => {
    const className = classNames('form-control', {
        'parsley-error': meta.error && meta.touched
    });

    return (
        <div className="form-group mg-b-0">
            <label className="form-label">{label}</label>
            <Tag
                {...input}
                type={customType}
                rows="5"
                className={className}
                placeholder={placeholder}
            />
            {underText && <label class="tel-under-text">{underText}</label>}
            <ul className="parsley-errors-list">{renderError(meta)}</ul>
        </div>
    );
};
export default renderInput;
