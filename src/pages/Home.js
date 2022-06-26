import { useAuth } from '../context/authContext';

export function Home() {

    const { user, logout, loading } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error)
        }
    };

    if (loading) return <h1>Loading</h1>

    return <div className='w-full max-w-xs m-auto text-black'>
        <div className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'>
            <p className='text-xl mb-4'>Welcome {user.displayName || user.email}</p>
            <button className='bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black' onClick={handleLogout}> Logout</button>
        </div>
    </div>
}