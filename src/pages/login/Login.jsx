import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '../../components/Alert';
import "./login.css";

export function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { login, loginWithGoogle, resetPassword } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState();

    const handleChange = ({ target: { type, value } }) => {
        console.log("name:", type, "value", value)
        setUser({ ...user, [type]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(user.email, user.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    }

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle()
            navigate("/");
        } catch (error) {
            setError(error.message)
        }
    }

    const handleResetPassword = async () => {
        if (!user.email) return setError("Please enter your email");
        try {
            await resetPassword(user.email);
            setError('Reset password sent')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="login">
            {error && <Alert message={error}></Alert>}
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Studia</h3>
                    <span className="loginDesc"> Test description, no spoilers.</span>
                </div>
                <div className="loginRight">
                    <div className='loginBox'>
                    <form onSubmit={handleSubmit} className="formBox">
                            <input type="email" placeholder="Email" className="loginInput" onChange={handleChange} />
                            <input type="password" placeholder="Password" className="loginInput" onChange={handleChange} />
                            <button className="loginButton">Log In</button>
                            <span className="loginForgot" onClick={handleResetPassword}>Forgot your password?</span>
                        </form>
                            <button className="loginRegisterButton"><Link to='/register'>Join the <b>community</b></Link></button>
                        <button onClick={handleGoogleLogin} className="loginGoogleButton"> G </button>
                    </div>
                </div>
            </div>
        </div>
    );
}