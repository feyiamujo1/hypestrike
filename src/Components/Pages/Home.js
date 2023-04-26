import { Link } from "react-router-dom"
import ShoeCollectionImage from "../../../src/Assest/images/D7uDay4WsAAVJA9.jpg";
import ClothCollectionImage from "../../../src/Assest/images/fabio-alves-eAUE_FmclYE-unsplash.jpg";
import CapCollectionImage from "../../../src/Assest/images/yang-deng-2loKxdi6Hmo-unsplash.jpg";
import SunglassesCollectionImage from "../../../src/Assest/images/pexels-emre-vonal-7858515.jpg"
import PantsCollectionImage from "../../../src/Assest/images/pants.jpg"
import BagCollectionImage from "../../../src/Assest/images/bag.webp"
import JacketCollectionImage from "../../../src/Assest/images/jacket.jpg"
import CustomerCamOneImage from "../../../src/Assest/images/IMG-7670.PNG"
import CustomerCamTwoImage from "../../../src/Assest/images/IMG-7671.PNG"
import CustomerCamThreeImage from "../../../src/Assest/images/IMG-7672.PNG"
import AssessoriesCollectionImage from "../../../src/Assest/images/sabrianna-v0fSc3Cz4Wk-unsplash.jpg"

const Home = () => {

  return (
    <div className=" m-0 p-0">
        <div className="h-screen w-full bg-home-image bg-no-repeat bg-cover bg-center bg-fixed flex flex-row justify-center items-center">
            <div className="w-11/12 md:w-fit text-center ">
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-2 outlined tracking-[4px] font-sitka">
                    HYPESTRIKE
                </h1>
                <p className="text-white w-full mb-4 font-roboto tracking-widest font-medium">
                    Your one-stop shop for the freshest kicks and designer threads.
                </p>
                <div className="flex flex-row gap-10 justify-center font-roboto">
                    <Link to="/sneakers" className="w-36 px-4 py-2 border-white border text-center text-white text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">
                        {/* <div className="h-4 w-4">
                            <svg viewBox="0 0 1024 1024"  className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#ffffff"></path>
                                </g>
                            </svg>
                        </div> */}
                        Sneakers
                    </Link>
                    <p className="w-36 px-4 py-2 border-white border text-center text-white text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">
                        Clothing
                        {/* <div className="h-4 w-4 rotate-180">
                            <svg viewBox="0 0 1024 1024"  className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#ffffff"></path>
                                </g>
                            </svg>
                        </div> */}
                    </p>
                </div>
            </div>
        </div>
        <div className="py-8 border-b">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full">
                    <p className="text-2xl font-semibold">Shop by Collection</p>
                    <p className=" ">Find your perfect style in our collections</p>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="relative h-[500px] sm:h-[550px] row-span-2 overflow-hidden group">
                        <img src={ShoeCollectionImage} alt="" className="h-full w-full object-fill group-hover:scale-150 transition-all ease-out duration-700" />
                        <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4">Sneakers</p>
                    </div>
                    <div className="relative h-[500px] sm:h-[550px] row-span-2 overflow-hidden group">
                        <img src={ClothCollectionImage} alt="" className="h-full w-full object-fill group-hover:scale-150 transition-all ease-out duration-700"/>
                        <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4">Shirts</p>
                    </div>
                    <div className="relative row-span-1 overflow-hidden group">
                        <img src={CapCollectionImage} alt="" className="h-full object-cover w-full group-hover:scale-150 transition-all ease-out duration-700"/>
                        <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4">Head Gears</p>
                    </div>
                    <div className="relative row-span-1 overflow-hidden group">
                        <img src={AssessoriesCollectionImage} alt="" className="h-full object-cover w-full object-center group-hover:scale-150 transition-all ease-out duration-700"/>
                        <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4">Accessories</p>
                    </div>
                    <div className="relative h-[500px] sm:h-[550px] row-span-2 overflow-hidden group">
                        <img src={PantsCollectionImage} alt="" className="h-full w-full object-fill group-hover:scale-150 transition-all ease-out duration-700 " />
                        <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4">Pants</p>
                    </div>
                    <div className="relative h-[267px] row-span-1 overflow-hidden group">
                        <img src={BagCollectionImage} alt="" className="h-full object-cover w-full group-hover:scale-150 transition-all ease-out duration-700"/>
                        <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4">Bags</p>
                    </div>
                    <div className="relative h-[500px] sm:h-[550px] row-span-2 overflow-hidden group">
                        <img src={JacketCollectionImage} alt="" className="h-full w-full object-cover group-hover:scale-150 transition-all ease-out duration-700"/>
                        <p className="w-fit px-6 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4">Jackets & Hoodies</p>
                    </div>
                    <div className="relative h-[267px] row-span-1 overflow-hidden group">
                        <img src={SunglassesCollectionImage} alt="" className="h-full object-cover w-full object-center group-hover:scale-150 transition-all ease-out duration-700"/>
                        <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4">Sunglasses</p>
                    </div>

                </div>
            </div>
        </div>
        <div className="py-8 border-b">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full">
                    <p className="text-2xl font-semibold">Style Inspiration</p>
                    <p className=" ">Photos from our customers' cam</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="h-[500px] sm:h-[550px] border relative">
                        <img src={CustomerCamOneImage} alt="" className="h-full w-full object-cover"/>
                        <p className="w-fit px-6 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4">Shop Fit</p>
                    </div>
                    <div className="h-[500px] sm:h-[550px] border relative ">
                        <img src={CustomerCamTwoImage} alt="" className="h-full w-full object-cover object-bottom"/>
                        <p className="w-fit px-6 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4">Shop Fit</p>
                    </div>
                    <div className="h-[500px] sm:h-[550px] border relative">
                        <img src={CustomerCamThreeImage} alt="" className="h-full w-full object-cover"/>
                        <p className="w-fit px-6 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4">Shop Fit</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="py-8 ">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full">
                    <p className="text-2xl font-semibold">Trending Brands</p>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-36 md:h-[400px] relative border rounded-md p-3 flex flex-col justify-end bg-nike-image bg-center bg-cover bg-no-repeat">
                        <img src={NikeLogo} alt="" className="w-16 absolute top-3 right-3"/>
                        <div className="absolute top-0 bottom-0 right-3 h-full py-3 flex flex-col justify-end ">
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Nike</p>
                        </div>
                    </div>
                    <div className="h-36 md:h-[400px] relative border rounded-md p-3 flex flex-col justify-end bg-adidas-image bg-center bg-cover bg-no-repeat">
                        <img src={AdidasLogo} alt="" className="w-16 absolute top-3 right-3"/>
                        <div className="absolute top-0 bottom-0 right-3 h-full py-3 flex flex-col justify-end ">
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Adidas</p>
                        </div>
                    </div>
                    <div className="h-36 md:h-[400px] relative border rounded-md p-3 flex flex-col justify-end bg-jordan-image bg-center bg-cover bg-no-repeat">
                        <img src={AdidasLogo} alt="" className="w-16 absolute top-3 right-3"/>
                        <div className="absolute top-0 bottom-0 right-3 h-full py-3 flex flex-col justify-end ">
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Jordan</p>
                        </div>
                    </div>
                    <div className="h-36 md:h-[400px] relative border rounded-md p-3 flex flex-col justify-end bg-adidas-image bg-center bg-cover bg-no-repeat">
                        <img src={AdidasLogo} alt="" className="w-16 absolute top-3 right-3"/>
                        <div className="absolute top-0 bottom-0 right-3 h-full py-3 flex flex-col justify-end ">
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Adidas</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        <div className="py-8 w-full border-t">
            <div className="w-11/12 mx-auto"> 
                <div className="w-full mb-2">
                    <p className="text-2xl font-semibold ">Exclusive Offers</p>
                    <p>We guarantee blah blah blah</p>
                </div>
                <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 ">
                    <div className="flex flex-row gap-1 items-center">
                        <div className="w-12 h-12">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000" stroke-width="3" viewBox="0 0 64 64">
                                <g stroke-linecap="round">
                                    <path d="M12.91 31.8v-5.7a19.09 19.09 0 0 1 38.18 0v5.7"/>
                                    <path d="M12.06 31.8h4.7v13.38h0-4.7a3 3 0 0 1-3-3V34.8a3 3 0 0 1 3-3ZM51.94 45.18h-4.7 0V31.8h4.7a3 3 0 0 1 3 3v7.38a3 3 0 0 1-3 3ZM51.7 45.56v5a4 4 0 0 1-4 4H36.56"/>
                                    <rect width="8.1" height="5.07" x="28.45" y="51.92" rx="2"/>
                                </g>
                            </svg>
                        </div>
                        <div>
                            <h1 className="font-medium">24 Hours Support</h1>
                            <p className="text-sm text-[#292929]">Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 items-center md:border-x md:justify-center md:p-2">
                        <div className="w-10 h-12">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 469.411 469.411">
                                <path d="M397.305 207.826c-67.733-59.947-161.493-61.12-194.56-59.307V74.706c0-5.867-4.8-10.667-10.667-10.667-2.453 0-4.907.853-6.827 2.453L3.918 215.826c-4.587 3.733-5.227 10.453-1.493 15.04.427.533.96.96 1.493 1.493l181.333 149.333c4.587 3.733 11.307 3.093 15.04-1.493 1.6-1.92 2.453-4.267 2.453-6.827v-77.013c34.667-8 175.147-30.507 246.613 103.36 1.813 3.52 5.44 5.653 9.387 5.653 3.413 0 6.72-1.6 8.853-4.693 1.28-1.813 1.813-4.053 1.813-6.293-.105-81.387-24.319-144.107-72.105-186.56zm-136.747 61.333c-41.067 0-70.72 8.427-71.467 8.64-4.587 1.28-7.68 5.44-7.68 10.24v62.72l-153.92-126.72 153.92-126.72v62.72c0 5.867 4.8 10.667 10.667 10.667.427 0 .853 0 1.28-.107 1.173-.107 115.2-12.907 189.76 53.227 35.2 31.147 56.213 75.2 62.72 130.987-54.08-70.507-130.027-85.654-185.28-85.654z"/>
                            </svg> 
                        </div>
                        <div>
                            <h1 className="font-medium">Return Policy</h1>
                            <p className="text-sm text-[#292929]">Return items within 30 days to get an exchange </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1 md:gap-3 items-center md:justify-end">
                        <div className="w-12 md:w-14 h-14">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000" strokeWidth="3" viewBox="0 0 64 64">
                                <path d="M21.68 42.22h15.49a1.68 1.68 0 0 0 1.68-1.68l5.85-21.42a1.68 1.68 0 0 0-1.7-1.68H17.61a1.69 1.69 0 0 0-1.69 1.68l-5 21.42a1.68 1.68 0 0 0 1.68 1.68h2.18"/>
                                <path d="M41.66 42.22h-3.47l5-17.29h8.22a.85.85 0 0 1 .65.3l3.58 6.3a.81.81 0 0 1 .2.53l-3.33 10.16h-3.6"/>
                                <ellipse cx="18.31" cy="43.31" rx="3.71" ry="3.76"/>
                                <ellipse cx="45.35" cy="43.31" rx="3.71" ry="3.76"/>
                                <path stroke-linecap="round" d="M23.25 22.36H6.87M20.02 27.6H8.45M21.19 33.5H3.21"/>
                            </svg>
                        </div>
                        <div>
                            <h1 className="font-medium">Worldwide Delivery</h1>
                            <p className="text-sm text-[#292929]">Deliver to anywhere within and outside Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    </div>
  )
}

export default Home