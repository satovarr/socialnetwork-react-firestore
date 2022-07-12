import Topbar from "../../components/topbar/Topbar";
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './home.css';

import { useAuth } from '../../context/authContext';



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

    return (
        <div>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed user={user} />
                <Rightbar />
            </div>
            <button className='bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black' onClick={handleLogout}> Logout</button>
        </div>
    );
}

export default Home;
