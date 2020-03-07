const regulars = {
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/,
}

const validateReg = {
    isPasswordValid: value => {
        return regulars.password.test(value);
    }
}

export default validateReg;
