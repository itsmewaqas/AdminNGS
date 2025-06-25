interface FormValues {
    email: string | null;
    password: string | null;
}

interface ValidationResult {
    [key: string]: string;
}

function validateInfo({ values }: { values: FormValues }): ValidationResult {
    let errors: ValidationResult = {};

    if (values.email !== null) {
        if (!values.email) {
            errors.email = "Please enter your email address.";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Please enter a valid email address.";
        }
    }

    if (values.password !== null) {
        if (!values.password) {
            errors.password = "Please enter your password.";
        } else if (values.password.length < 6) {
            errors.password = "Password needs to be 6 characters or more.";
        }
    }

    return errors;
}

export default validateInfo;
