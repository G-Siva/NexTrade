import { useEffect, useState } from "react";
import { IoWarningOutline as Warning } from "react-icons/io5";
import { TbMenuDeep as Menu } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";

const Nav = () => {

  const location = useLocation(); // Location hook
    useEffect(() => { // setNavItem "state" depends upon the "location.pathname"
        const pathname = location.pathname;
        switch (pathname) {
            case "/trading":
                setNavItem("trading");
                break;
            case "/education":
                setNavItem("education");
                break;
            case "/about":
                setNavItem("about");
                break;
            case "/help":
                setNavItem("help");
                break;
            case "/login":
                setNavItem("login");
                break;
            case "/register":
                setNavItem("register");
                break;
            default:
              setNavItem("/");
              break;
        }
    }, [location.pathname]);

  const [menuClick, setMenuClick] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [NavItem,setNavItem]=useState("/")

  const HandleMenu = () => {
    // MobileMenu setter
    return (
      <MobileNav
        HandleMobileNavItem={() => setMobileNav((prev) => !prev)}
        onClick={() => {
          setMenuClick((prev) => !prev);
        }}
      />
    );
  };

  useEffect(() => {
    // Close Menu when the page re-renders
    setMenuClick(false);
  }, [location.pathname, mobileNav]);

  return (
    <div>
      {
        menuClick === true ?
        HandleMenu() :
        <div className=" flex flex-col items-center">
        <div className=" text-white w-[70%] text-center text-[10px] border border-red-50 p-1">
          <p className=" flex gap-1 justify-center">
            <span className=" text-red-700">
              <Warning />
            </span>{" "}
            Investing in financial products involves taking risk. Your
            investments may increase or decrease in value, and losses may exceed
            the value of your original investment
          </p>
        </div>

        <div className=" flex flex-row w-full justify-around p-8 text-white">
          <Link to={'/'} className=" cursor-pointer font-black text-[20px]">
            Nex<span className=" text-red-700">Trade</span>
          </Link>
          <div className=" flex flex-row gap-10 md:hidden">
            <Link to={'/trading'} className=" cursor-pointer">Trading</Link>
            <Link to={'/education'} className=" cursor-pointer">Education</Link>
            <Link to={'/about'} className=" cursor-pointer">About Us</Link>
            <Link to={'/help'} className=" cursor-pointer">Help</Link>
          </div>
          <div className=" flex gap-10 md:hidden">
            <Link to={'/login'} className=" border border-white p-1 px-3 cursor-pointer">
              Login
            </Link>
            <Link to={'/register'} className=" border border-white p-1 px-3 cursor-pointer">
              Registration
            </Link>
          </div>
          <div
            className="p-2 cursor-pointer text-[30px] text-gray-500 md:block hidden"
            onClick={() => setMenuClick((prev) => !prev)}
          >
            <Menu />
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Nav;
