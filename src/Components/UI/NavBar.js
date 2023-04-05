import { useState } from "react";

const NavBar = () => {

    // Set Nav bg color
    const [navbarBg, setNavbarbg] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbarbg(true);
        } else {
            setNavbarbg(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

  return (
    <div className={navbarBg ? "bg-black w-full p-0 m-0 fixed z-50" : "w-full p-0 m-0 absolute "}>
        <div className= "w-11/12 mx-auto py-3.5 flex flex-row justify-between items-center text-white fill-white " >
            <div className="flex flex-row items-center">
                <p className="text-lg sm:text-lg md:text-2xl font-sitka font-black tracking-[1px] cursor-pointer text-white">HYPESTRIKE</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                {/*<div className="w-8 h-8 md:w-9 md:h-9 flex flex-row justify-center items-center">
                    <svg className="cursor-pointer w-full h-full" fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsSerif="http://www.serif.com/" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="Icon">
                            <path d="M16.004,6.576c-2.941,-2.289 -7.202,-2.083 -9.905,0.619c-2.927,2.927 -2.927,7.68 -0,10.607c-0,0 9.192,9.192 9.192,9.192c0.391,0.391 1.024,0.391 1.415,0l9.192,-9.192c2.927,-2.927 2.927,-7.68 -0,-10.607c-2.69,-2.69 -6.951,-2.88 -9.894,-0.619Zm-0.004,2.328c-0,-0 -0,-0 0,-0c0.438,-0.008 0.667,-0.258 0.703,-0.289c2.355,-2.05 5.641,-2.145 7.781,-0.005c2.146,2.146 2.146,5.631 -0,7.778c-0,-0 -8.486,8.485 -8.486,8.485c0,0 -8.485,-8.485 -8.485,-8.485c-2.146,-2.147 -2.146,-5.632 0,-7.778c2.147,-2.147 5.633,-2.146 7.78,0.001c0.187,0.187 0.442,0.293 0.707,0.293Z"/>
                        </g>
                    </svg>
                </div> */}
                <div className="w-8 h-8 md:w-9 md:h-9 relative flex flex-row justify-center items-center">
                    <svg className="cursor-pointer w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.77 18.3C9.2807 18.3 7.82485 17.8584 6.58655 17.031C5.34825 16.2036 4.38311 15.0275 3.81318 13.6516C3.24325 12.2757 3.09413 10.7616 3.38468 9.30096C3.67523 7.84029 4.39239 6.49857 5.44548 5.44548C6.49857 4.39239 7.84029 3.67523 9.30096 3.38468C10.7616 3.09413 12.2757 3.24325 13.6516 3.81318C15.0275 4.38311 16.2036 5.34825 17.031 6.58655C17.8584 7.82485 18.3 9.2807 18.3 10.77C18.3 11.7588 18.1052 12.738 17.7268 13.6516C17.3484 14.5652 16.7937 15.3953 16.0945 16.0945C15.3953 16.7937 14.5652 17.3484 13.6516 17.7268C12.738 18.1052 11.7588 18.3 10.77 18.3ZM10.77 4.74999C9.58331 4.74999 8.42327 5.10189 7.43657 5.76118C6.44988 6.42046 5.68084 7.35754 5.22672 8.45389C4.77259 9.55025 4.65377 10.7566 4.88528 11.9205C5.11679 13.0844 5.68824 14.1535 6.52735 14.9926C7.36647 15.8317 8.43556 16.4032 9.59945 16.6347C10.7633 16.8662 11.9697 16.7474 13.0661 16.2933C14.1624 15.8391 15.0995 15.0701 15.7588 14.0834C16.4181 13.0967 16.77 11.9367 16.77 10.75C16.77 9.15869 16.1379 7.63257 15.0126 6.50735C13.8874 5.38213 12.3613 4.74999 10.77 4.74999Z" fill="#ffffff"/>
                        <path d="M20 20.75C19.9015 20.7504 19.8038 20.7312 19.7128 20.6934C19.6218 20.6557 19.5392 20.6001 19.47 20.53L15.34 16.4C15.2075 16.2578 15.1354 16.0697 15.1388 15.8754C15.1422 15.6811 15.221 15.4958 15.3584 15.3583C15.4958 15.2209 15.6812 15.1422 15.8755 15.1388C16.0698 15.1354 16.2578 15.2075 16.4 15.34L20.53 19.47C20.6704 19.6106 20.7493 19.8012 20.7493 20C20.7493 20.1987 20.6704 20.3893 20.53 20.53C20.4608 20.6001 20.3782 20.6557 20.2872 20.6934C20.1962 20.7312 20.0985 20.7504 20 20.75Z" fill="#ffffff"/>
                    </svg>
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 flex flex-row justify-center items-center">
                    <svg fill="#ffffff" className="cursor-pointer w-full h-full" viewBox="-3 4 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.88 21.76c-0.12-0.6-0.32-1.2-0.56-1.76-0.88-2.080-2.48-3.8-4.44-4.8 0.56-0.84 0.88-1.84 0.88-2.92 0-2.92-2.36-5.28-5.28-5.28s-5.28 2.36-5.28 5.28c0 1.080 0.32 2.080 0.88 2.92-2.6 1.32-4.44 3.72-5.040 6.52-0.16 0.8 0.040 1.6 0.52 2.24 0.52 0.64 1.28 1 2.080 1h13.64c0.8 0 1.56-0.36 2.080-1 0.52-0.6 0.72-1.4 0.52-2.2zM9.44 8.68c2 0 3.6 1.64 3.6 3.6s-1.64 3.6-3.6 3.6c-2 0-3.6-1.64-3.6-3.6s1.64-3.6 3.6-3.6zM17.040 22.96c-0.2 0.24-0.48 0.36-0.76 0.36h-13.64c-0.32 0-0.6-0.12-0.76-0.36-0.2-0.24-0.28-0.56-0.2-0.84 0.52-2.44 2.2-4.52 4.48-5.6 0.040 0 0.040-0.040 0.080-0.040 0.88 0.68 2 1.12 3.2 1.12s2.32-0.4 3.24-1.12c0.040 0 0.040 0.040 0.080 0.040 1.8 0.84 3.24 2.28 4 4.12 0.2 0.48 0.36 0.96 0.48 1.48 0.080 0.24 0 0.6-0.2 0.84z"></path>
                    </svg>
                </div>
                <div className="w-8 h-8 md:w-9 md:h-9 relative flex flex-row justify-center items-center">
                    <svg className="cursor-pointer w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 11.01V11M16 11.01V11M8 8V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V8M8 8H6.84027C5.80009 8 4.93356 8.79732 4.84718 9.83391L4.18051 17.8339C4.08334 18.9999 5.00352 20 6.1736 20H17.8264C18.9965 20 19.9167 18.9999 19.8195 17.8339L19.1528 9.83391C19.0664 8.79732 18.1999 8 17.1597 8H16M8 8H16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className="absolute bg-white text-black rounded-full h-4 w-4 md:h-5 md:w-5 text-center -bottom-1 md:-bottom-2 right-0 text-xs md:text-sm flex flex-row justify-center items-center font-semibold">
                        <p>2</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar