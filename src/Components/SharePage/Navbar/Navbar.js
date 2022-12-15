import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaBookOpen, FaDatabase, FaRegFileAlt, FaScroll, FaStarHalfAlt, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
    const [openbar, setOpenbar] = useState(false)
    useEffect(()=>{
        document.addEventListener('click',(e)=>{
            const barsbutton = document.querySelector(".barsbutton");
            const target = e.target;
            if(target !== barsbutton){
                setOpenbar(false)
                const body = document.querySelector("body");
                body.style.backgroundColor = "";
            }else{
                setOpenbar(true)
                const body = document.querySelector('body')
                body.style.backgroundColor = "rgba(0,0,0,0.2)";
            }
        })
    },[])
    
     
    return (
      <div className="shadow-lg lg:py-3 py-6 relative">
        <div className="w-4/5 mx-auto flex justify-between items-center text-primary">
          <div>
            <div className="lg:flex hidden">
              <h3>Mcash</h3>
            </div>
            <ul className="flex lg:hidden items-center text-xl">
              <li className="px-3 ">
                <svg
                  className="swap-off fill-current barsbutton"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              </li>
              <li className="px-3">Home</li>
            </ul>
            <div
            style={{ zIndex:20 }}
              className={`w-[350px] lg:hidden  bg-white shadow min-h-[100vh] fixed top-0 sidebaritem ${
                openbar
                  ? "left-0 ease-out duration-300"
                  : "-left-[350px] ease-in duration-300"
              } `}
            >
              <div className="flex flex-col items-center mt-24">
                <img
                  className="w-[8rem] h-[8rem] rounded-full mb-3"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="
                  alt=""
                />
                <h3 className="font-bold text-xl text-primary">
                  hridoytanjil.hsc@gmail.com
                </h3>
              </div>
              <div className="my-3 text-primary">
                <ul>
                  <li onClick={()=>{
                  }} className="p-6 border-b-2 border-slate-400 text-2xl font-bold flex justify-start items-center">
                    <FaDatabase></FaDatabase>{" "}
                    <span className="ml-6">Redeem</span>
                  </li>
                  <li className="p-6 border-b-2 border-slate-400 text-2xl font-bold flex justify-start items-center">
                    <FaScroll></FaScroll>{" "}
                    <span className="ml-6">Transcations</span>
                  </li>
                  <li className="p-6 border-b-2 border-slate-400 text-2xl font-bold flex justify-start items-center">
                    <FaUserPlus></FaUserPlus>{" "}
                    <span className="ml-6">Invite a Friend</span>
                  </li>
                  <li className="p-6 border-b-2 border-slate-400 text-2xl font-bold flex justify-start items-center">
                    <FaStarHalfAlt></FaStarHalfAlt>{" "}
                    <span className="ml-6">Rate Us</span>
                  </li>
                  <li className="p-6 border-b-2 border-slate-400 text-2xl font-bold flex justify-start items-center">
                    <FaRegFileAlt></FaRegFileAlt>{" "}
                    <span className="ml-6">Help & Support</span>
                  </li>
                  <li className="p-6 border-b-2 border-slate-400 text-2xl font-bold flex justify-start items-center">
                    <FaBookOpen></FaBookOpen>{" "}
                    <span className="ml-6">Privacy Policy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <ul className="lg:flex mr-6 hidden">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? `mx-1 px-4 py-2 font-bold `
                      : `mx-1 px-4 py-2 font-bold `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? `mx-1 px-4 py-2 font-bold `
                      : `mx-1 px-4 py-2 font-bold `
                  }
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? `mx-1 px-4 py-2 font-bold `
                      : `mx-1 px-4 py-2 font-bold `
                  }
                >
                  Transections
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? `mx-1 px-4 py-2 font-bold `
                      : `mx-1 px-4 py-2 font-bold `
                  }
                >
                  Invite Friend
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? `mx-1 px-4 py-2 font-bold `
                      : `mx-1 px-4 py-2 font-bold `
                  }
                >
                  Redeem
                </NavLink>
              </li>
            </ul>

            <h4 className=" mx-2 font-bold">Hasan</h4>
            <img
              className="w-8 h-8 rounded-full"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Navbar;