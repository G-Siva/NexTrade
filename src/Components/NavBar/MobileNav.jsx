import { IoIosArrowDropleftCircle as BackArrow } from "react-icons/io";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

const MobileNav = ({onClick,HandleMobileNavItem}) => {
    const handleOnclick=()=>{
        const MobileNavClicked = onClick();
    };
    
    return (
        <div className=" py-[4%] md:py-[2%] left-0 h-screen duration-700 ease-in text-white">
            <div className=" mx-3 h-screen flex flex-col gap-4 md:gap-1">

                <div>
                    <motion.div onClick={()=>{handleOnclick()}} whileTap={{ scale: 0.6 }} className=" float-right p-4 mr-2 text-[30px] cursor-pointer">
                        <BackArrow />
                    </motion.div>
                </div>

                <div className="py-[2%] flex flex-col items-center h-[60vh] gap-5">
                    <Link to={"/"} onClick={()=>{HandleMobileNavItem()}} className="w-[100%] text-center p-5">
                        <p>Trading</p>
                    </Link>
                    <Link to={"/about"} onClick={()=>{HandleMobileNavItem()}} className="w-[100%] text-center p-5">
                        <p>Education</p>
                    </Link>
                    <Link to={"/services"} onClick={()=>{HandleMobileNavItem()}} className="w-[100%] text-center p-5">
                        <p>About Us</p>
                    </Link>
                    <Link to={"/career"} onClick={()=>{HandleMobileNavItem()}} className="w-[100%] text-center p-5">
                        <p>Help</p>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default MobileNav;