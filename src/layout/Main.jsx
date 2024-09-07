import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import MobileDrawer from "../components/shared/MobileDrawer";
import { useEffect, useState } from "react";
import MobileNav from "../components/shared/MobileNav";

const Main = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <MobileNav isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <MobileDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
