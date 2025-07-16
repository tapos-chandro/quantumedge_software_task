import { Link } from "react-router";


const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center"><h1 className="text-7xl">404</h1>
            <h1 className="text-2xl mb-5">Page Not Found</h1>
                <Link to={'/'} className="primary-btn px-10 py-2 text-white">Go Home</Link>
            </div>
        
        </div>
    );
};

export default NotFound;