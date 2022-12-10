export default function login_validate(values){
    const errors = {};

    // validation for email 
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // validation for password
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 4) {
        errors.password = 'Must be grater than 4';
    } else if (values.password.includes(" ")){
        errors.password = "Invalid Password";
    }

    return errors;
}