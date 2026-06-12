import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen flex flex-col justify-center items-center max-w-2xl mx-auto">
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout