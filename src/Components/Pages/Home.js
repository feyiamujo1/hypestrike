const Home = () => {
  return (
    <div className="h-screen w-full m-0 p-0 bg-home-image bg-no-repeat bg-cover bg-center bg-fixed flex flex-row justify-center items-center">
        <div className="w-11/12 md:w-fit text-center ">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-4 outlined tracking-[4px] font-gilroy">
                HYPESTRIKE
            </h1>
            <p className="text-white w-full mb-6 font-bold tracking-[2px]">Your wardrobe's gateway to greatness</p>
            {/* <p className="text-white">Categories</p> */}
            <div className="flex flex-row gap-10 justify-center">
                <p className="w-36 px-4 py-2 border-white border text-center text-white text-lg cursor-pointer font-semibold flex flex-row items-center justify-center gap-1.5">
                    <div className="h-4 w-4">
                        <svg viewBox="0 0 1024 1024"  className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#ffffff"></path>
                            </g>
                        </svg>
                    </div>
                    Sneakers
                </p>
                <p className="w-36 px-4 py-2 border-white border text-center text-white text-lg cursor-pointer font-semibold flex flex-row items-center justify-center gap-1.5">
                    Apparels
                    <div className="h-4 w-4 rotate-180">
                        <svg viewBox="0 0 1024 1024"  className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#ffffff"></path>
                            </g>
                        </svg>
                    </div>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home