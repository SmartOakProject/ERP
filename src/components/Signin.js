import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

import renderInput from 'components/forms/renderInput';
import { required, validEmail } from 'components/forms/validate';

import logo from '../img/neur.svg';

const onSubmit = formValues => {
    console.log(formValues);
};
const SignIn = props => {
    return (
        <div className="az-signin-wrapper content content-full">
            <div className="az-card-signin">
                <div className="singin-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="az-signin-header">
                    <h3>Please sign in to continue</h3>
                    <Form
                        onSubmit={onSubmit}
                        subscription={{ submitting: true }}
                        render={({ handleSubmit, submitting }) => (
                            <form onSubmit={handleSubmit}>
                                <Field
                                    name="email"
                                    label="Email"
                                    placeholder="Enter your email"
                                    validate={validEmail}
                                    subscription={{
                                        value: true,
                                        error: true,
                                        touched: true,
                                    }}
                                >
                                    {renderInput}
                                </Field>
                                <Field
                                    name="password"
                                    label="Password"
                                    placeholder="Enter your password"
                                    validate={value => required(value, 'password')}
                                    customType="password"
                                    subscription={{
                                        value: true,
                                        error: true,
                                        touched: true,
                                    }}
                                >
                                    {renderInput}
                                </Field>

                                <button
                                    type="submit"
                                    className="btn btn-az-primary btn-block"
                                    disabled={submitting}
                                >
                                    Sign In
                                </button>
                            </form>
                        )}
                    />
                </div>
                <div className="az-signin-footer">
                    <p>
                        <a href="">Forgot password?</a>
                    </p>
                    <p>
                        Don't have an account?
                        <Link to="/signup"> Create an Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
