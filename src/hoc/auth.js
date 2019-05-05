import React from 'react';
import { Link } from 'react-router-dom';

const Auth = (props) => {
    const pass = 'password123';

    if (pass != 'password123') {
        return <h3>You are authorized</h3>
    }
    else {

        return props.childeren
    }
}

export default Auth;