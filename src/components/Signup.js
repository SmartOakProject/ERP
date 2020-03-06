import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import renderInput from 'components/forms/renderInput';
import { required, validEmail } from 'components/forms/validate';

import logo from 'img/neur.svg';
const onSubmit = formValues => {
    console.log(formValues);
};
const SignUp = () => {
    return (
        <div className="az-signup-wrapper">
            <div className="az-column-signup-left">
                <div>
                    <div className="signup-logo">
                        <img
                            src={logo}
                            style={{
                                width: '350px',
                                marginBottom: '20px',
                            }}
                            alt=""
                        />
                    </div>
                    <h4>
                        We are excited to launch our new company and product Azia. After being
                        featured in too many magazines to mention and having created an online stir,
                        we know that ThemePixels is going to be big. We also hope to win Startup
                        Fictional Business of the Year this year.
                    </h4>

                    <a href="index.html" className="btn btn-outline-primary">
                        Learn More
                    </a>
                </div>
            </div>
            <div className="az-column-signup">
                <img
                    src={logo}
                    style={{
                        width: '250px',
                        marginBottom: '20px',
                    }}
                    alt=""
                />

                <div className="az-signup-header">
                    {/* <h4>It's free to signup and only takes a minute.</h4> */}
                    <Form
                        onSubmit={onSubmit}
                        subscription={{ submitting: true }}
                        render={({ handleSubmit, submitting }) => (
                            <form onSubmit={handleSubmit}>
                                <Field
                                    name="firstLastName"
                                    label="Firstname &amp; Lastname"
                                    placeholder="Enter your firstname and lastname"
                                    validate={value => required(value, 'first and last name')}
                                    subscription={{
                                        value: true,
                                        error: true,
                                        touched: true,
                                    }}
                                >
                                    {renderInput}
                                </Field>
                                <Field
                                    name="emial"
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
                                <Field
                                    name="phoneNumber"
                                    label="Phone Number"
                                    placeholder="Enter your phone number"
                                    validate={value => required(value, 'phone number')}
                                    customType="tel"
                                    underText="Your number is kept confidential and not
                                    shared with others"
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
                                    disabled={submitting}
                                    className="btn btn-az-primary btn-block"
                                >
                                    Create Account
                                </button>
                                <div className="row row-xs">
                                    <div className="col-sm-6">
                                        <button className="btn btn-block">
                                            <i className="fab fa-facebook-f"></i>
                                            Signup with Facebook
                                        </button>
                                    </div>
                                    <div className="col-sm-6 mt-1 mt-sm-0">
                                        <button className="btn btn-primary btn-block">
                                            <i className="fab fa-twitter"></i>
                                            Signup with Twitter
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    />
                    <form action="page-profile.html"></form>
                </div>
                <div className="az-signup-footer">
                    <p>
                        Already have an account?
                        <Link to="/signin"> Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default SignUp;
