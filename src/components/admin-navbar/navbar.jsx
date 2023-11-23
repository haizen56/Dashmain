import React, { useContext } from "react";
import { Context } from "../../context/index";
import dinein from "../../dates/imgs/num.jpeg";
import walkin from "../../dates/imgs/walkin.png";
import logo from "../../dates/imgs/logo.jpeg";
import LoginImg from "../../dates/imgs/login.jpg";
import UserImg from "../../dates/imgs/Oval3.png";
const Navbar = () => {
  const [showDetails, setShowDetails] = React.useState(false);

  const handleHoverEnter = () => {
    setShowDetails(true);
  };

  const handleHoverLeave = () => {
    setShowDetails(false);
  };
  let { state, dispatch } = useContext(Context);
  let toogle = () => {
    dispatch({ type: "SET_TOGGLE_NAVBAR", payload: !state.toggleNavbar });
  };
  return (
    <div className=" z-50 fixed left-0 top-0 right-0 h-[76px] px-6 py-4 bg-white border-b border-neutral-200 justify-between items-center gap-[20px] inline-flex">
      <div className=" flex gap-6 items-center">
        {/* <img src={require('../admin-page/Screenshot_6.png')} alt="" /> */}
        <div className=" border-r pr-6 border-[#e4e4e4]">
          <img src={logo} width={50} alt="" />
        </div>
        <div
          className=" text-xl font-semibold leading-8 text-[#19191C] cursor-pointer"
          onClick={toogle}
        >
          Smart Recognition
        </div>
        <div className="flex">
          {/* <input type="search" placeholder="Search" class="mr-8 p-2 rounded-md border-black "/> */}
          <input
            type="search"
            placeholder="Search"
            class="mr-4 p-2 rounded-xl border-gray-300 bg-slate-200 hover:bg-blue-200 hover:border-pink-500 text-pink-50 "
          />
        </div>
      </div>
      <div className="justify-start items-start gap-8 flex">
        <div className="hidden rounded-[100px] border border-neutral-200 justify-start items-start md:flex">
          <div className="px-8 py-2.5 hover:bg-neutral-200 rounded-l-full duration-300 justify-start items-center gap-2 flex">
            <div>
              <div>
                <div className="justify-start items-center gap-8 flex">
                  <img className="w-11 h-11 rounded-full" src={walkin} />
                </div>
              </div>
            </div>
            <div>
              <div className="justify-start items-center gap-8 flex">
                <img className="w-11 h-11 rounded-full" src={dinein} />
              </div>
            </div>
            {/* <div className="text-zinc-900 text-base font-normal leading-normal">Walk-In</div> */}
          </div>

          <div className="px-2 py-2 hover:bg-neutral-200 rounded-r-full duration-300 border-l border-neutral-200 justify-start items-center gap-2 flex">
            <div>
              <div className="justify-start items-center gap-8 flex">
                {/* <img
        className="w-11 h-11 rounded-full cursor-pointer hover:shadow-lg hover:scale-105 duration-300 ease-in-out"
        src={LoginImg}
        alt="User Profile"
      /> */}

                <img
                  className="w-11 h-11 rounded-full hover:shadow-lg hover:scale-105 duration-300 ease-in-out"
                  src={LoginImg}
                  alt="User Profile"
                  onMouseEnter={handleHoverEnter}
                  onMouseLeave={handleHoverLeave}
                />
                {showDetails && (
                  <div className="absolute top-20 left-66 bg-black rounded-md p-2 text-white">
                    <p>User Details</p>
                    <ul>
                      <li>Name: Zubair Ahmad</li>
                      <li>Email: jZubair@example.com</li>
                      <li>Phone: +1234567890</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-8 flex">
          <img className="w-11 h-11 rounded-full" src={UserImg} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
