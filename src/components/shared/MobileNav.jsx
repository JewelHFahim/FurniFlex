/* eslint-disable react/prop-types */
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const MobileNav = ({ isOpen, toggleDrawer }) => {
  return (
    <div className="lg:hidden h-[60px] border-b flex items-center justify-between px-5">
      <Link to="/" className="flex items-center gap-1">
        <img src={logo} alt="logo" className="w-[38px] h-[38px]" />
        <h2 className="text-[20px] font-bold">
          Furni<span className="text-primary">Flex</span>
        </h2>
      </Link>

      <button onClick={() => toggleDrawer()} className="text-xl">
        {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
      </button>
    </div>
  );
};

export default MobileNav;
