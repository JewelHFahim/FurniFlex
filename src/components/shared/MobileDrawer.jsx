/* eslint-disable react/prop-types */
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { IoMdLogOut } from "react-icons/io";
import users from "../../assets/user.png";

const MobileDrawer = ({ isOpen, toggleDrawer }) => {
  const { pathname } = useLocation();
  const { products } = useSelector((state) => state.cart);
  const { user, logOut } = useContext(UserContext);

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

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfull");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size={250}
        className="p-5"
      >
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-1">
              <img src={logo} alt="logo" className="w-[38px] h-[38px]" />
              <h2 className="text-[20px] font-bold">
                Furni<span className="text-primary">Flex</span>
              </h2>
            </Link>

            <ul>
              <li className="flex flex-col gap-4 text-[#202020] font-medium text-[18px]">
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

            <div className="px-5">
              <Link
                to="/cart"
                className="text-[#202020] font-medium text-[18px]"
              >
                Cart-{products?.length}
              </Link>
            </div>
          </div>

          {/* Profile section */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              {user?.email ? (
                <img
                  src={user?.photoURL ? user?.photoURL : users}
                  alt="user"
                  className="w-[40px] h-[40px]"
                />
              ) : (
                <div className="w-[40px] h-[40px] bg-slate-200 rounded-full" />
              )}
              <p className="text-sm">{user?.email}</p>
            </div>

            <button
              onClick={() => handleLogOut()}
              className="w-max text-[#323232] hover:text-opacity-70 font-medium flex items-center gap-1 border px-3 rounded-md"
            >
              Logout <IoMdLogOut />
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
