let validate;
validate = (values, args) => {
    const errors = {};
    if (!values.login) {
        errors.login = 'Required';
    } else if (typeof values.login !== 'string') {
        errors.login = 'Not a string';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (typeof values.password !== 'string') {
        errors.password = 'Not a string';
    }

    return errors;
};

export default validate;
