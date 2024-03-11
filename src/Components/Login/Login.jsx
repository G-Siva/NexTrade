const Login = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className=" text-white border rounded-md w-[30%] p-3 md:w-auto">
        <div className=" flex flex-col items-center justify-center">
          <div className=" text-[20px] font-bold mb-2">
            <p>Login</p>
          </div>
          <div>
            <div>
              <div className=" text-[12px] py-2"><p>Email Address</p></div>
              <input type="text" className=" rounded-full bg-transparent border w-full p-1" />
            </div>
            <div>
                <div className=" text-[12px] py-2"><p>Password</p></div>
                <input type="password" className=" rounded-full bg-transparent border w-full p-1" />
            </div>
            <div className=" flex gap-2 text-[12px] mt-3">
                <input type="checkbox" id="" />
                <p>Keep me signed in</p>
            </div>
            <div className=" flex rounded-full p-1 bg-green-800 mt-3 text-[16px] cursor-pointer items-center justify-center">
                <div>Continue</div>
            </div>
            <div>
                <div className=" flex flex-col items-center ">
                    <div className=" p-1 rounded-full text-[12px] border w-[40%] mt-3 text-center cursor-pointer">Or Sign Up with</div>
                    <div className=" flex gap-4 mt-2">
                        <div className=" p-1 rounded-full w-[200px] text-[12px] border mt-2 text-center cursor-pointer">Google</div>
                        <div className=" p-1 rounded-full w-full text-[12px] border mt-2 text-center cursor-pointer">Facebook</div>
                    </div>
                </div>
            </div>
            <div className=" text-[12px] mt-3">
                <p className=" text-blue-500">Don't Have an Account ? <span className=" text-white">Sign Up Here</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
