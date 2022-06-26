import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../components/Alert';

export function Register() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { signup } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState();

    const handleChange = ({ target: { name, value } }) => {
        console.log(name, value)
        setUser({ ...user, [name]: value })
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

    return <div className='w-full max-w-xs m-auto'>
        {error && <Alert message={error}></Alert>}
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold my-2' htmlFor="email">Email</label>
                <input type="email" name="email" className='shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleChange} />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold my-2'  htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className="shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} />
            </div>

            <button className='bg-blue-500 hover:bg-blue-700 text-white font.bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Register</button>
        </form>
    </div>
}