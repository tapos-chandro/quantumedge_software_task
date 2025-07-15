
import { Outlet } from 'react-router';
import NavBar from '../sheard/NavBar';
import Footer from '../sheard/Footer';

const MainLayout = () => {

    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;