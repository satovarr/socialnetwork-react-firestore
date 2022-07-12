import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigate, Link} from 'react-router-dom';
import { Alert } from '../../components/Alert';
import "./register.css";

export function Register() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { signup } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState();

    const handleChange = ({ target: { type, value } }) => {
        console.log(type, value)
        setUser({ ...user, [type]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signup(user.email, user.password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="register">
            {error && <Alert message={error}></Alert>}

            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Studia</h3>
                    <span className="loginDesc"> Test description, no spoilers.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <form className="loginBox" onSubmit={handleSubmit}>
                            <input type="username" placeholder="Username" className="loginInput" />
                            <input type="email" placeholder="Email" className="loginInput" onChange={handleChange} />
                            <input type="password" placeholder="Password" className="loginInput" onChange={handleChange} />
                            <input placeholder="Confirm password" className="loginInput" />
                            <button className="loginButton">Sign Up</button>
                        </form>
                        <button className="loginRegisterButton"><Link to="/login">I have already an Account</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}