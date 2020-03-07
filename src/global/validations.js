const regulars = {
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/,
}

const validateReg = {
    isPasswordValid: value => {
        if(!value) return Promise.reject('Please input your Password!');
        return regulars.password.test(value) ? Promise.resolve() : Promise.reject('Too easy password, please add upercase symbol and number ');
    }
}

export default validateReg;
