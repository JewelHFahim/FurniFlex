import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import users from "../../assets/user.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useSelector } from "react-redux";
import { IoMdLogOut } from "react-icons/io";
import { useContext, useState } from "react";
import { UserContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { pathname } = useLocation();
  const [profileOpen, setProfileOpen] = useState(false);
  const { products } = useSelector((state) => state.cart);
  const { user, logOut } = useContext(UserContext);

  console.log(products);
  const handleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfull");
      })
      .catch((error) => console.error(error));
  };

  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Categories",
      path: "",
    },
    {
      name: "Custom",
      path: "",
    },
    {
      name: "Blog",
      path: "",
    },
  ];

  return (
    <nav className="hidden lg:flex items-center justify-between px-[160px] h-[100px] border-b">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-1">
        <img src={logo} alt="logo" className="w-[38px] h-[38px]" />
        <h2 className="text-[20px] font-bold">
          Furni<span className="text-primary">Flex</span>
        </h2>
      </Link>

      {/* Menus */}
      <div>
        <ul>
          <li className="flex items-center gap-3 text-[#202020] font-medium text-[18px]">
            {menus.map((menu, index) => {
              return (
                <Link key={index} to={menu.path}>
                  <button
                    className={`px-5 py-[3px]  rounded-md ${
                      pathname === menu.path
                        ? "text-primary bg-gray-200/30"
                        : ""
                    }`}
                  >
                    {menu.name}
                  </button>
                </Link>
              );
            })}
          </li>
        </ul>
      </div>

      {/* Cart & Profile */}
      <div className="flex items-center gap-5">
        <Link to="/cart" className="relative">
          <HiOutlineShoppingBag className="text-[33px] text-[#323232]" />
          <div className="absolute bottom-0 right-0 text-[11px] font-medium text-white bg-[#323232] rounded-full w-[16px] h-[16px] flex justify-center items-center">
            {products?.length}
          </div>
        </Link>

        <div className="relative">
          <button to="" onClick={() => handleProfile()}>
            {user?.email ? (
              <img src={ user?.photoURL ? user?.photoURL : users} alt="user" className="w-[40px] h-[40px]" />
            ) : (
              <div className="w-[40px] h-[40px] bg-slate-200 rounded-full" />
            )}
          </button>

          {profileOpen && (
            <div className="absolute top-10 left-0 rounded-lg w-max h-max p-3 bg-white shadow-md border flex flex-col gap-2 items-center justify-center z-[999]">
              <p>{user?.email}</p>

              {!user?.email ? (
                <Link to="/signin" className="text-[#323232] hover:text-opacity-70 font-medium flex items-center gap-1 border px-3 rounded-md">
                  Login <IoMdLogOut />
                </Link>
              ) : (
                <button
                  onClick={() => handleLogOut()}
                  className="text-[#323232] hover:text-opacity-70 font-medium flex items-center gap-1 border px-3 rounded-md"
                >
                  Logout <IoMdLogOut />
                </button>
              )}
            </div>
          )}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
