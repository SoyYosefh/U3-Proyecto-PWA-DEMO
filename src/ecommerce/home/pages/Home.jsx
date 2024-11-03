import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../../../share/bars/components/CommerceAppBar';

function Home() {

    return (
        <div id='div-home'>
            {/* <h2>Home Page - eCommers Project</h2> */}
            <div id='div-appbar'>
                <ResponsiveAppBar />
            </div>
            <div >
                <Outlet />
            </div>
        </div>
    );
}

export default Home;