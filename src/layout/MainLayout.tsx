import { Outlet } from "react-router-dom";
import Breadcumps from "./Breadcumps";
import Menu from "./Menu";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className='h-[100vh] flex'>
      <Menu />
      <div className='bg-green-300 flex-1 flex flex-col'>
        <Navbar />

        <Breadcumps />

        <div className='bg-white flex-1'>
          <Outlet />
        </div>

        <div className='bg-purple-300 h-20'></div>
      </div>
    </div>
  );
};

export default MainLayout;
