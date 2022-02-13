import React from 'react'
import { Redirect } from 'react-router-dom';

const Hoc = (props) => {
    const Afterlogin = props.comp;
    let auth;
    if (typeof window !== 'undefined') {
        auth = localStorage.getItem("auth");
    }
    return (
        <div>
            {auth ? <Afterlogin /> : <Redirect to="/" />}
        </div>
    )
}

export default Hoc
