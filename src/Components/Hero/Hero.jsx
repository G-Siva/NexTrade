import HeroImg from "../../assets/Images/heroimg.png";
import ArrowImg from "../../assets/Images/Arrow.png"
import { MdArrowOutward as Arrow } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <div className=" text-white flex items-center justify-evenly mt-8 md:flex-col" >
        <div>
          <div className=" text-[50px]">
            <h1>Profitablity</h1>
            <h1>On the Rise</h1>
          </div>
          <div>
            <p>A trading Platform that supports your financial goals!</p>
          </div>
          <div className=" flex rounded-md p-2 bg-green-800 mt-4 cursor-pointer w-[40%] items-center justify-center">
            Start Trading <Arrow/>
          </div>
          <img src={ArrowImg} alt="" className=" absolute top-[200px]" width={280} />
        </div>
        <div>
            <img src={HeroImg} alt="" width={400} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
