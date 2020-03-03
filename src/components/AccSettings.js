import React from 'react';
import { Form, Field } from 'react-final-form';
import renderInput from './forms/renderInput';
import { required, validEmail } from './forms/validate';

const onSubmit = formValues => {
    console.log(formValues);
};
const AccSettings = props => {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 mb-3 mb-md-0">
                    <div class="text-center">
                        <img
                            src="//placehold.it/100"
                            class="avatar rounded-circle"
                            alt="avatar"
                        />
                        <h6>Upload a different photo...</h6>
                        <input
                            type="file"
                            // ref={this.fileInput}
                            class="form-control"
                        />
                    </div>
                </div>

                <div class="col-md-9 personal-info">
                    <h3>Personal info</h3>
                    <Form
                        onSubmit={onSubmit}
                        subscription={{ submitting: true }}
                        render={({ handleSubmit, submitting }) => (
                            <form
                                class="form-horizontal"
                                onSubmit={handleSubmit}
                            >
                                <Field
                                    name="fullName"
                                    label="Full name"
                                    validate={value =>
                                        required(value, 'Full Name')
                                    }
                                    subscription={{
                                        value: true,
                                        error: true,
                                        touched: true
                                    }}
                                >
                                    {renderInput}
                                </Field>
                                <Field
                                    name="description"
                                    label="Description"
                                    tag="textarea"
                                    validate={value =>
                                        required(value, 'Description')
                                    }
                                    subscription={{
                                        value: true,
                                        error: true,
                                        touched: true
                                    }}
                                >
                                    {renderInput}
                                </Field>
                                <Field
                                    name="email"
                                    label="Email"
                                    validate={validEmail}
                                    subscription={{
                                        value: true,
                                        error: true,
                                        touched: true
                                    }}
                                >
                                    {renderInput}
                                </Field>
                                <Field
                                    name="password"
                                    label="Password"
                                    validate={value =>
                                        required(value, 'Password')
                                    }
                                    customType="password"
                                    subscription={{
                                        value: true,
                                        error: true,
                                        touched: true
                                    }}
                                >
                                    {renderInput}
                                </Field>
                                <Field
                                    name="phoneNumber"
                                    label="Phone Number"
                                    validate={value =>
                                        required(value, 'Phone Number')
                                    }
                                    subscription={{
                                        value: true,
                                        error: true,
                                        touched: true
                                    }}
                                >
                                    {renderInput}
                                </Field>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    class="btn btn-primary"
                                >
                                    Save Changes
                                </button>
                            </form>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};
export default AccSettings;
