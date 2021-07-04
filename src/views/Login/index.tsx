import React from 'react';
import { RouteComponentProps } from 'react-router';

const Login = (props: RouteComponentProps):JSX.Element => {
    console.log('Login', props);
    
    return (
        <div>Login</div>
    )
}

export default Login;