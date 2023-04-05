const Home = () => {

  return (
    <div className=" m-0 p-0">
        <div className="h-screen w-full bg-home-image bg-no-repeat bg-cover bg-center bg-fixed flex flex-row justify-center items-center">
            <div className="w-11/12 md:w-fit text-center ">
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-3 outlined tracking-[4px] font-sitka">
                    HYPESTRIKE
                </h1>
                <p className="text-white w-full mb-4 font-semibold font-robotomono">Your wardrobe's gateway to freshness</p>
                {/* <p className="text-white">Categories</p> */}
                <div className="flex flex-row gap-10 justify-center font-robotomono">
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
        <div className="w-11/12 mx-auto py-6">
            <p className="font-robotomono font-black text-2xl">Brands</p>
            <div>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Home