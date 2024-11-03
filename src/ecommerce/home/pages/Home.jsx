import { Outlet } from 'react-router-dom';

function Home() {

    return (
        <div id='div-home'>
            <h2>Home Page - eCommers Project</h2>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Home;