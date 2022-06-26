import React, { useState, useEffect } from "react";  

const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setLoginData({...loginData, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginData)
    }

    return (
        <>
            <form>
                <input type="email" name="email" id="email" />
                <input type="password" name="password" id="password" />

            </form>
            
        </>
    )
}

export default LoginForm;