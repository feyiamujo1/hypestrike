import SneakerImage from "../../../src/Assest/images/bg_shoe.png"
import SmallScreenSneakerImage from "../../../src/Assest/images/small_screen_bg_shoe.png"
import Lebrons1 from "../../../src/Assest/images/lebrons.webp"
// import Lebrons2 from "../../../src/Assest/images/lebrons_2.webp"
import Jordans1 from "../../../src/Assest/images/jordans.webp"
import Adidas from "../../../src/Assest/images/adidas.webp"
import Puma from "../../../src/Assest/images/puma.webp"
import Huarache from "../../../src/Assest/images/huarache.webp"
import NikeBannerImage from "../../../src/Assest/images/nike-removebg-preview.png"
import AdidasBannerImage from "../../../src/Assest/images/didas-removebg-preview.png"
import NikeLogo from "../../../src/Assest/images/nikelogo.png"
import AdidasLogo from "../../../src/Assest/images/adidaslogo.png"

const Sneakers = () => {
  return (
    <div className="p-0 m-0 font-roboto">
        <div className=" relative pt-16 bg-white h-screen overflow-hidden flex flex-col-reverse justify-center gap-4 md:block border-b border-[#f1f1f1]">
            <div className="w-11/12 md:h-full mx-auto flex flex-row justify-start items-center">
                <div className="w-full md:max-w-[500px] space-y-3 z-50">
                    <h2 className="text-xl font-medium">Latest Arrivals</h2>
                    <p className="font-semibold text-4xl md:text-5xl leading-10 md:leading-[60px]">Stack Your Rotation With The Hotest</p>
                    <p className="w-36 px-4 py-2 border-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Now</p>
                </div>
            </div>
            <img src={window.innerWidth < 768 ? SmallScreenSneakerImage : SneakerImage} alt="" className="w-11/12 h-fit max-h-1/2 object-cover object-center mx-auto sm:w-[60%] md:h-fit md:absolute md:-top-32 md:-right-10 md:w-[580px] md:brightness-100" />
        </div>
        <div className="py-8 border-b">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full flex flex-row justify-between items-center">
                    <p className="text-2xl font-semibold">Latest Release</p>
                    {/* <div className="hidden md:flex flex-row gap-4 ">
                        <div className="h-6 w-6">
                            <svg viewBox="0 0 1024 1024"  className="icon fill-black hover:fill-white cursor-pointer" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="h-6 w-6 rotate-180">
                            <svg viewBox="0 0 1024 1024"  className="icon fill-black hover:fill-white cursor-pointer" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" ></path>
                                </g>
                            </svg>
                        </div>
                    </div> */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    <div className="border cursor-pointer rounded-md">
                        <div className="w-full h-72 relative overflow-hidden">
                            <div className="w-8 h-8 flex flex-row justify-center items-center absolute z-10 right-4 top-4 border-black">
                                <svg className="cursor-pointer w-full h-full  fill-black"  viewBox="0 0 32 32" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsSerif="http://www.serif.com/" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Icon">
                                        <path className="fill-black" d="M16.004,6.576c-2.941,-2.289 -7.202,-2.083 -9.905,0.619c-2.927,2.927 -2.927,7.68 -0,10.607c-0,0 9.192,9.192 9.192,9.192c0.391,0.391 1.024,0.391 1.415,0l9.192,-9.192c2.927,-2.927 2.927,-7.68 -0,-10.607c-2.69,-2.69 -6.951,-2.88 -9.894,-0.619Zm-0.004,2.328c-0,-0 -0,-0 0,-0c0.438,-0.008 0.667,-0.258 0.703,-0.289c2.355,-2.05 5.641,-2.145 7.781,-0.005c2.146,2.146 2.146,5.631 -0,7.778c-0,-0 -8.486,8.485 -8.486,8.485c0,0 -8.485,-8.485 -8.485,-8.485c-2.146,-2.147 -2.146,-5.632 0,-7.778c2.147,-2.147 5.633,-2.146 7.78,0.001c0.187,0.187 0.442,0.293 0.707,0.293Z"/>
                                    </g>
                                </svg>
                            </div>
                            <img src={Lebrons1} alt="" className="w-full h-full object-cover object-center"/>
                        </div>
                        <div className="p-3 border-t">
                            <p className="text-sm text-[#777777] font-medium">Nike</p>
                            <p className="font-semibold text-lg">&#8358; 32,000</p>
                            <p className=" font-semibold h-14 mb-1 text-lg">Lebron XX "Metallic Gold"</p>
                            <p className="bg-black font-semibold text-white rounded-md text-center py-3 hover:bg-[#eff0f2] hover:text-black">Add to Cart</p>
                        </div>
                    </div>
                    <div className="border cursor-pointer rounded-md">
                        <div className="w-full h-72 relative overflow-hidden">
                            <div className="w-8 h-8 flex flex-row justify-center items-center absolute z-10 right-4 top-4 border-black">
                                <svg className="cursor-pointer w-full h-full  fill-black"  viewBox="0 0 32 32" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsSerif="http://www.serif.com/" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Icon">
                                        <path className="fill-black" d="M16.004,6.576c-2.941,-2.289 -7.202,-2.083 -9.905,0.619c-2.927,2.927 -2.927,7.68 -0,10.607c-0,0 9.192,9.192 9.192,9.192c0.391,0.391 1.024,0.391 1.415,0l9.192,-9.192c2.927,-2.927 2.927,-7.68 -0,-10.607c-2.69,-2.69 -6.951,-2.88 -9.894,-0.619Zm-0.004,2.328c-0,-0 -0,-0 0,-0c0.438,-0.008 0.667,-0.258 0.703,-0.289c2.355,-2.05 5.641,-2.145 7.781,-0.005c2.146,2.146 2.146,5.631 -0,7.778c-0,-0 -8.486,8.485 -8.486,8.485c0,0 -8.485,-8.485 -8.485,-8.485c-2.146,-2.147 -2.146,-5.632 0,-7.778c2.147,-2.147 5.633,-2.146 7.78,0.001c0.187,0.187 0.442,0.293 0.707,0.293Z"/>
                                    </g>
                                </svg>
                            </div>
                            <img src={Jordans1} alt="" className="w-full h-full object-cover object-center"/>
                        </div>
                        <div className="p-3 border-t">
                            <p className="text-sm text-[#777777] font-medium">Jordans</p>
                            <p className="font-semibold text-lg">&#8358; 54,000</p>
                            <p className=" font-semibold h-14 mb-1 text-lg">Air Jordan 6 "Cool Grey"</p>
                            <p className="bg-black font-semibold text-white rounded-md text-center py-3 hover:bg-[#eff0f2] hover:text-black">Add to Cart</p>
                        </div>
                    </div>
                    <div className="border cursor-pointer rounded-md">
                        <div className="w-full h-72 relative overflow-hidden">
                            <div className="w-8 h-8 flex flex-row justify-center items-center absolute z-10 right-4 top-4 border-black">
                                <svg className="cursor-pointer w-full h-full  fill-black"  viewBox="0 0 32 32" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsSerif="http://www.serif.com/" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Icon">
                                        <path className="fill-black" d="M16.004,6.576c-2.941,-2.289 -7.202,-2.083 -9.905,0.619c-2.927,2.927 -2.927,7.68 -0,10.607c-0,0 9.192,9.192 9.192,9.192c0.391,0.391 1.024,0.391 1.415,0l9.192,-9.192c2.927,-2.927 2.927,-7.68 -0,-10.607c-2.69,-2.69 -6.951,-2.88 -9.894,-0.619Zm-0.004,2.328c-0,-0 -0,-0 0,-0c0.438,-0.008 0.667,-0.258 0.703,-0.289c2.355,-2.05 5.641,-2.145 7.781,-0.005c2.146,2.146 2.146,5.631 -0,7.778c-0,-0 -8.486,8.485 -8.486,8.485c0,0 -8.485,-8.485 -8.485,-8.485c-2.146,-2.147 -2.146,-5.632 0,-7.778c2.147,-2.147 5.633,-2.146 7.78,0.001c0.187,0.187 0.442,0.293 0.707,0.293Z"/>
                                    </g>
                                </svg>
                            </div>
                            <img src={Adidas} alt="" className="w-full h-full object-cover object-center"/>
                        </div>
                        <div className="p-3 border-t">
                            <p className="text-sm text-[#777777] font-medium">Adidas</p>
                            <p className="font-semibold text-lg">&#8358; 10,000</p>
                            <p className=" font-semibold h-14 mb-1 text-lg">Adidas NMD_V3 </p>
                            <p className="bg-black font-semibold text-white rounded-md text-center py-3 hover:bg-[#eff0f2] hover:text-black">Add to Cart</p>
                        </div>
                    </div>
                    <div className="border cursor-pointer rounded-md">
                        <div className="w-full h-72 relative overflow-hidden">
                            <div className="w-8 h-8 flex flex-row justify-center items-center absolute z-10 right-4 top-4 border-black">
                                <svg className="cursor-pointer w-full h-full  fill-black"  viewBox="0 0 32 32" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsSerif="http://www.serif.com/" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Icon">
                                        <path className="fill-black" d="M16.004,6.576c-2.941,-2.289 -7.202,-2.083 -9.905,0.619c-2.927,2.927 -2.927,7.68 -0,10.607c-0,0 9.192,9.192 9.192,9.192c0.391,0.391 1.024,0.391 1.415,0l9.192,-9.192c2.927,-2.927 2.927,-7.68 -0,-10.607c-2.69,-2.69 -6.951,-2.88 -9.894,-0.619Zm-0.004,2.328c-0,-0 -0,-0 0,-0c0.438,-0.008 0.667,-0.258 0.703,-0.289c2.355,-2.05 5.641,-2.145 7.781,-0.005c2.146,2.146 2.146,5.631 -0,7.778c-0,-0 -8.486,8.485 -8.486,8.485c0,0 -8.485,-8.485 -8.485,-8.485c-2.146,-2.147 -2.146,-5.632 0,-7.778c2.147,-2.147 5.633,-2.146 7.78,0.001c0.187,0.187 0.442,0.293 0.707,0.293Z"/>
                                    </g>
                                </svg>
                            </div>
                            <img src={Puma} alt="" className="w-full h-full object-cover object-center"/>
                        </div>
                        <div className="p-3 border-t">
                            <p className="text-sm text-[#777777] font-medium">Puma</p>
                            <p className="font-semibold text-lg">&#8358; 32,000</p>
                            <p className=" font-semibold h-14 mb-1 text-lg">Puma TRC Blaze HC"</p>
                            <p className="bg-black font-semibold text-white rounded-md text-center py-3 hover:bg-[#eff0f2] hover:text-black">Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-8 border-b">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full flex flex-row justify-between items-center">
                    <p className="text-2xl font-semibold">Best Selling</p>
                    {/* <div className="hidden md:flex flex-row gap-4 ">
                        <div className="h-6 w-6">
                            <svg viewBox="0 0 1024 1024"  className="icon fill-black hover:fill-white cursor-pointer" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="h-6 w-6 rotate-180">
                            <svg viewBox="0 0 1024 1024"  className="icon fill-black hover:fill-white cursor-pointer" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" ></path>
                                </g>
                            </svg>
                        </div>
                    </div> */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    <div className="border cursor-pointer rounded-md">
                        <div className="w-full h-72 relative overflow-hidden">
                            <div className="w-8 h-8 flex flex-row justify-center items-center absolute z-10 right-4 top-4 border-black">
                                <svg className="cursor-pointer w-full h-full  fill-black"  viewBox="0 0 32 32" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsSerif="http://www.serif.com/" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Icon">
                                        <path className="fill-black" d="M16.004,6.576c-2.941,-2.289 -7.202,-2.083 -9.905,0.619c-2.927,2.927 -2.927,7.68 -0,10.607c-0,0 9.192,9.192 9.192,9.192c0.391,0.391 1.024,0.391 1.415,0l9.192,-9.192c2.927,-2.927 2.927,-7.68 -0,-10.607c-2.69,-2.69 -6.951,-2.88 -9.894,-0.619Zm-0.004,2.328c-0,-0 -0,-0 0,-0c0.438,-0.008 0.667,-0.258 0.703,-0.289c2.355,-2.05 5.641,-2.145 7.781,-0.005c2.146,2.146 2.146,5.631 -0,7.778c-0,-0 -8.486,8.485 -8.486,8.485c0,0 -8.485,-8.485 -8.485,-8.485c-2.146,-2.147 -2.146,-5.632 0,-7.778c2.147,-2.147 5.633,-2.146 7.78,0.001c0.187,0.187 0.442,0.293 0.707,0.293Z"/>
                                    </g>
                                </svg>
                            </div>
                            <img src={Huarache} alt="" className="w-full h-full object-cover object-center"/>
                        </div>
                        <div className="p-3 border-t">
                            <p className="text-sm text-[#777777] font-medium">Nike</p>
                            <p className="font-semibold text-lg">&#8358; 32,000</p>
                            <p className=" font-semibold h-14 mb-1 text-lg">Nike Huarache PRM "Enigma Stone""</p>
                            <p className="bg-black font-semibold text-white rounded-md text-center py-3 hover:bg-[#eff0f2] hover:text-black">Add to Cart</p>
                        </div>
                    </div>
                    <div className="border cursor-pointer rounded-md">
                        <div className="w-full h-72 relative overflow-hidden">
                            <div className="w-8 h-8 flex flex-row justify-center items-center absolute z-10 right-4 top-4 border-black">
                                <svg className="cursor-pointer w-full h-full  fill-black"  viewBox="0 0 32 32" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsSerif="http://www.serif.com/" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Icon">
                                        <path className="fill-black" d="M16.004,6.576c-2.941,-2.289 -7.202,-2.083 -9.905,0.619c-2.927,2.927 -2.927,7.68 -0,10.607c-0,0 9.192,9.192 9.192,9.192c0.391,0.391 1.024,0.391 1.415,0l9.192,-9.192c2.927,-2.927 2.927,-7.68 -0,-10.607c-2.69,-2.69 -6.951,-2.88 -9.894,-0.619Zm-0.004,2.328c-0,-0 -0,-0 0,-0c0.438,-0.008 0.667,-0.258 0.703,-0.289c2.355,-2.05 5.641,-2.145 7.781,-0.005c2.146,2.146 2.146,5.631 -0,7.778c-0,-0 -8.486,8.485 -8.486,8.485c0,0 -8.485,-8.485 -8.485,-8.485c-2.146,-2.147 -2.146,-5.632 0,-7.778c2.147,-2.147 5.633,-2.146 7.78,0.001c0.187,0.187 0.442,0.293 0.707,0.293Z"/>
                                    </g>
                                </svg>
                            </div>
                            <img src={Jordans1} alt="" className="w-full h-full object-cover object-center"/>
                        </div>
                        <div className="p-3 border-t">
                            <p className="text-sm text-[#777777] font-medium">Jordans</p>
                            <p className="font-semibold text-lg">&#8358; 54,000</p>
                            <p className=" font-semibold h-14 mb-1 text-lg">Air Jordan 6 "Cool Grey"</p>
                            <p className="bg-black font-semibold text-white rounded-md text-center py-3 hover:bg-[#eff0f2] hover:text-black">Add to Cart</p>
                        </div>
                    </div>
                    <div className="border cursor-pointer rounded-md">
                        <div className="w-full h-72 relative overflow-hidden">
                            <div className="w-8 h-8 flex flex-row justify-center items-center absolute z-10 right-4 top-4 border-black">
                                <svg className="cursor-pointer w-full h-full  fill-black"  viewBox="0 0 32 32" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsSerif="http://www.serif.com/" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Icon">
                                        <path className="fill-black" d="M16.004,6.576c-2.941,-2.289 -7.202,-2.083 -9.905,0.619c-2.927,2.927 -2.927,7.68 -0,10.607c-0,0 9.192,9.192 9.192,9.192c0.391,0.391 1.024,0.391 1.415,0l9.192,-9.192c2.927,-2.927 2.927,-7.68 -0,-10.607c-2.69,-2.69 -6.951,-2.88 -9.894,-0.619Zm-0.004,2.328c-0,-0 -0,-0 0,-0c0.438,-0.008 0.667,-0.258 0.703,-0.289c2.355,-2.05 5.641,-2.145 7.781,-0.005c2.146,2.146 2.146,5.631 -0,7.778c-0,-0 -8.486,8.485 -8.486,8.485c0,0 -8.485,-8.485 -8.485,-8.485c-2.146,-2.147 -2.146,-5.632 0,-7.778c2.147,-2.147 5.633,-2.146 7.78,0.001c0.187,0.187 0.442,0.293 0.707,0.293Z"/>
                                    </g>
                                </svg>
                            </div>
                            <img src={Adidas} alt="" className="w-full h-full object-cover object-center"/>
                        </div>
                        <div className="p-3 border-t">
                            <p className="text-sm text-[#777777] font-medium">Adidas</p>
                            <p className="font-semibold text-lg">&#8358; 10,000</p>
                            <p className=" font-semibold h-14 mb-1 text-lg">Adidas NMD_V3 </p>
                            <p className="bg-black font-semibold text-white rounded-md text-center py-3 hover:bg-[#eff0f2] hover:text-black">Add to Cart</p>
                        </div>
                    </div>
                    <div className="border cursor-pointer rounded-md">
                        <div className="w-full h-72 relative overflow-hidden">
                            <div className="w-8 h-8 flex flex-row justify-center items-center absolute z-10 right-4 top-4 border-black">
                                <svg className="cursor-pointer w-full h-full  fill-black"  viewBox="0 0 32 32" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsSerif="http://www.serif.com/" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Icon">
                                        <path className="fill-black" d="M16.004,6.576c-2.941,-2.289 -7.202,-2.083 -9.905,0.619c-2.927,2.927 -2.927,7.68 -0,10.607c-0,0 9.192,9.192 9.192,9.192c0.391,0.391 1.024,0.391 1.415,0l9.192,-9.192c2.927,-2.927 2.927,-7.68 -0,-10.607c-2.69,-2.69 -6.951,-2.88 -9.894,-0.619Zm-0.004,2.328c-0,-0 -0,-0 0,-0c0.438,-0.008 0.667,-0.258 0.703,-0.289c2.355,-2.05 5.641,-2.145 7.781,-0.005c2.146,2.146 2.146,5.631 -0,7.778c-0,-0 -8.486,8.485 -8.486,8.485c0,0 -8.485,-8.485 -8.485,-8.485c-2.146,-2.147 -2.146,-5.632 0,-7.778c2.147,-2.147 5.633,-2.146 7.78,0.001c0.187,0.187 0.442,0.293 0.707,0.293Z"/>
                                    </g>
                                </svg>
                            </div>
                            <img src={Puma} alt="" className="w-full h-full object-cover object-center"/>
                        </div>
                        <div className="p-3 border-t">
                            <p className="text-sm text-[#777777] font-medium">Puma</p>
                            <p className="font-semibold text-lg">&#8358; 32,000</p>
                            <p className=" font-semibold h-14 mb-1 text-lg">Lebron XX "Metallic Gold"</p>
                            <p className="bg-black font-semibold text-white rounded-md text-center py-3 hover:bg-[#eff0f2] hover:text-black">Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-8 ">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full">
                    <p className="text-2xl font-semibold">Brands</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-36 relative border rounded-md p-3 flex flex-col justify-end">
                        <div className="h-28 z-20 -mb-2">
                            <img className="h-full object-cover object-center " src={NikeBannerImage} alt="" />
                        </div>
                        <p className="text-8xl md:text-8xl xl:text-[132px] outlined absolute -z-10 h-fit font-extrabold left-3 bottom-0 top-0 my-auto brightness-0">Nike</p>
                        <div className="absolute top-0 bottom-0 right-3 h-full py-3 flex flex-col justify-end ">
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Now</p>
                        </div>
                    </div>
                    <div className="h-36 relative border rounded-md p-3 flex flex-col justify-end">
                        <div className="h-28 z-20 -mb-2">
                            <img className="h-full object-cover object-center " src={AdidasBannerImage} alt="" />
                        </div>
                        <p className="text-8xl md:text-8xl xl:text-[132px] w-full outlined absolute -z-10 h-fit font-extrabold left-3 bottom-0 top-0 my-auto brightness-0">Adidas</p>
                        <div className="absolute top-0 bottom-0 right-3 h-full py-3 flex flex-col justify-end ">
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Now</p>
                        </div>
                    </div>
                    <div className="h-36 md:h-44 relative border rounded-md p-3 flex flex-col justify-end bg-nike-image bg-center bg-cover bg-no-repeat">
                        {/* <div className="h-28 z-20 -mb-2">
                            <img className="h-full object-cover object-center " src={NikeBannerImage} alt="" />
                        </div> */}
                        {/* <p className="text-8xl md:text-8xl xl:text-[132px] outlined absolute h-fit font-extrabold left-3 bottom-0 top-0 my-auto brightness-0">Nike</p> */}
                        <img src={NikeLogo} alt="" className="w-16 absolute top-3 right-3"/>
                        <div className="absolute top-0 bottom-0 right-3 h-full py-3 flex flex-col justify-end ">
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Nike</p>
                        </div>
                    </div>
                    <div className="h-36 md:h-44 relative border rounded-md p-3 flex flex-col justify-end bg-adidas-image bg-center bg-cover bg-no-repeat">
                        {/* <div className="h-28 z-20 -mb-2">
                            <img className="h-full object-cover object-center " src={NikeBannerImage} alt="" />
                        </div> */}
                        {/* <p className="text-8xl md:text-8xl xl:text-[132px] w-full outlined absolute -z-10 h-fit font-extrabold left-3 bottom-0 top-0 my-auto brightness-0">Adidas</p> */}
                        <img src={AdidasLogo} alt="" className="w-16 absolute top-3 right-3"/>
                        <div className="absolute top-0 bottom-0 right-3 h-full py-3 flex flex-col justify-end ">
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Adidas</p>
                        </div>
                    </div>
                    <div className="h-36 md:h-44 relative border rounded-md p-3 flex flex-col justify-end bg-nike-image bg-center bg-cover bg-no-repeat">
                        {/* <div className="h-28 z-20 -mb-2">
                            <img className="h-full object-cover object-center " src={NikeBannerImage} alt="" />
                        </div> */}
                        <p className="text-8xl md:text-8xl xl:text-[132px] outlined absolute h-fit font-extrabold left-3 bottom-0 top-0 my-auto brightness-0">Nike</p>
                        <img src={NikeLogo} alt="" className="w-16 absolute top-3 right-3"/>
                        <div className="absolute top-0 bottom-0 right-3 h-full py-3 flex flex-col justify-end ">
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Now</p>
                        </div>
                    </div>
                    <div className="h-36 md:h-44 relative border rounded-md p-3 flex flex-col justify-end bg-adidas-image bg-center bg-cover bg-no-repeat">
                        {/* <div className="h-28 z-20 -mb-2">
                            <img className="h-full object-cover object-center " src={NikeBannerImage} alt="" />
                        </div> */}
                        <p className="text-8xl md:text-8xl xl:text-[132px] w-full outlined absolute h-fit font-extrabold left-3 bottom-0 top-0 my-auto brightness-0">Adidas</p>
                        <img src={AdidasLogo} alt="" className="w-16 absolute top-3 right-3"/>
                        <div className="absolute top-0 bottom-0 right-3 h-full py-3 flex flex-col justify-end ">
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Now</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Sneakers