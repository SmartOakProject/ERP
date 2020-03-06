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
    underText,
}) => {
    const className = classNames('form-control', {
        'parsley-error': meta.error && meta.touched,
    });

    return (
        <div className="form-group mg-b-0">
            <label className="form-label" htmlFor={input.name}>
                {label}
            </label>
            <Tag
                {...input}
                type={customType}
                rows="5"
                className={className}
                placeholder={placeholder}
            />
            {underText && <span className="tel-under-text">{underText}</span>}
            <ul className="parsley-errors-list">{renderError(meta)}</ul>
        </div>
    );
};

renderInput.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    placeholder: PropTypes.string,
    tag: PropTypes.string,
    customType: PropTypes.string,
    label: PropTypes.string,
    underText: PropTypes.string,
};

export default renderInput;
