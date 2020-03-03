export const required = (value, text) =>
    value ? undefined : `You must enter a ${text}`;

const correctEmailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validEmail = value =>
    correctEmailCheck.test(String(value).toLowerCase())
        ? undefined
        : 'You must enter a valid email';
