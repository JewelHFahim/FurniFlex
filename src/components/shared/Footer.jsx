import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import usaFlag from "../../assets/usaFlag.png";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const menus = [
    {
      title: "About Us",
      submenus: [
        {
          name: "Master Plan",
          path: "",
        },
        {
          name: "Jobs",
          path: "",
        },
        {
          name: "Invest",
          path: "",
        },
        {
          name: "Pressroom",
          path: "",
        },
        {
          name: "Blog",
          path: "",
        },
        {
          name: "Contact",
          path: "",
        },
      ],
    },
    {
      title: "Community & Support",
      submenus: [
        {
          name: "Willow X Community",
          path: "",
        },
        {
          name: "Developer & Marker Access",
          path: "",
        },
        {
          name: "Special Cases",
          path: "",
        },
      ],
    },
    {
      title: "Explore EEEVE",
      submenus: [
        {
          name: "Unloack my Robot Power",
          path: "",
        },
        {
          name: "Starlight",
          path: "",
        },
        {
          name: "Robot Platform",
          path: "",
        },
        {
          name: "EEVE Roadmap",
          path: "",
        },
      ],
    },
  ];

  return (
    <div className="w-full h-max lg:h-[590px] bg-black px-5 lg:px-[160px] py-8 flex flex-col items-center justify-center">
      {/* Footer Top */}
      <div className="w-full flex flex-col lg:flex-row border-b gap-8 md:gap-0 border-[#252948] pb-16">
        <div className="w-full flex justify-center md:justify-start md:items-start md:w-[35%]">
          <Link to="/" className="flex items-center gap-1">
            <img src={logo} alt="logo" className="w-[38px] h-[38px]" />
            <h2 className="text-[20px] font-bold text-white">
              Furni<span className="text-primary">Flex</span>
            </h2>
          </Link>
        </div>

        <div className="w-full md:w-[65%] flex flex-col gap-y-4 md:flex-row flex-1">
          {menus.map((menu, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col md:justify-start justify-center md:items-start items-center"
              >
                <h3 className="md:text-[18px] font-semibold text-white">
                  {menu.title}
                </h3>

                <ul className="mt-4 md:mt-8 font-semibold flex flex-col gap-2 md:gap-4 text-center md:text-left">
                  {menu.submenus.map((subm, idx) => {
                    return (
                      <Link
                        to={subm.path}
                        key={idx}
                        className="text-[#81859F] text-sm md:text-base"
                      >
                        {subm.name}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-4 flex flex-col gap-4 md:gap-8 w-full">
        <div className="w-full flex  flex-col gap-y-3 md:flex-row items-center justify-between">
          {/* socials */}
          <div className="flex items-center gap-3 text-[20px] text-[#DFDFDF]">
            <Link to="">
              <FiFacebook />
            </Link>
            <Link to="">
              <FaInstagram />
            </Link>
            <Link to="">
              <FaXTwitter />
            </Link>
            <Link to="">
              <FiLinkedin />
            </Link>
          </div>

          {/* menus */}
          <div className="text-[#81859F] text-sm md:text-[18px] font-semibold flex flex-wrap items-center gap-4">
            <Link to="">March22 Recap</Link>
            <Link to="">Privacy Policy</Link>
            <Link to="">General Terms</Link>
            <Link to="">Contact</Link>
          </div>

          {/* Language */}
          <div className="flex items-center gap-2">
            <img src={usaFlag} alt="usaFlag" className="w-[18px] h-[18px]" />
            <p className="md:text-[18px] font-semibold text-[#81859F]">
              United States (English)
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-[#323544] md:text-[18px] font-semibold">
            EEVE © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
