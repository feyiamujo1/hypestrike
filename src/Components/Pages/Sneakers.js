import { useRef } from "react"
import SneakerImage from "../../../src/Assest/images/bg_shoe.png"
import SmallScreenSneakerImage from "../../../src/Assest/images/small_screen_bg_shoe.png"
import ShirtBgImage from "../../../src/Assest/images/bg_shirt.png"
import SmallShirtBgImage from "../../../src/Assest/images/small_bg_shirt.png"
import Lebrons1 from "../../../src/Assest/images/lebrons.webp"
// import Jordan from "../../../src/Assest/images/lebrons_2.webp"
import Jordans1 from "../../../src/Assest/images/jordans.webp"
import Adidas from "../../../src/Assest/images/adidas.webp"
import Puma from "../../../src/Assest/images/puma.webp"
import Huarache from "../../../src/Assest/images/huarache.webp"
// import NikeBannerImage from "../../../src/Assest/images/nike-removebg-preview.png"
// import AdidasBannerImage from "../../../src/Assest/images/didas-removebg-preview.png"
import NikeLogo from "../../../src/Assest/images/nikelogo.png";
import AdidasLogo from "../../../src/Assest/images/adidaslogo.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Autoplay } from "swiper"; //Scrollbar

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import CatalogueItemContainer from "../UI/CatalogueItemContainer"



const Sneakers = () => {
    const LatestShoesData = [
        {id: 0, brand: "Nike", name: 'Lebron XX "Metallic Gold"', price: "32,000", image: Lebrons1, favorite: false},
        {id: 1, brand: "Jordans", name: 'Air Jordan 6 "Cool Grey"', price: "54,000", image: Jordans1, favorite: true},
        {id: 2, brand: "Adidas", name: 'Adidas NMD_V3', price: "10,000", image: Adidas, favorite: false},
        {id: 3, brand: "Puma", name: 'Puma TRC Blaze HC', price: "32,000", image: Puma, favorite: false},
        {id: 4, brand: "Nike", name: 'Nike Huarache PRM "Enigma Stone"', price: "33,000", image: Huarache, favorite: true},
        {id: 5, brand: "Jordans", name: 'Air Jordan 6 "Cool Grey"', price: "54,000", image: Jordans1, favorite: false},
        {id: 6, brand: "Adidas", name: 'Adidas NMD_V3', price: "10,000", image: Adidas, favorite: false},
        {id: 7, brand: "Puma", name: 'Puma TRC Blaze HC', price: "32,000", image: Puma, favorite: true},
    ]

    const HotestShoesData = [
        {id: 4, brand: "Nike", name: 'Nike Huarache PRM "Enigma Stone"', price: "33,000", image: Huarache, favorite: true},
        {id: 1, brand: "Jordans", name: 'Air Jordan 6 "Cool Grey"', price: "54,000", image: Jordans1, favorite: false},
        {id: 2, brand: "Adidas", name: 'Adidas NMD_V3', price: "10,000", image: Adidas, favorite: true},
        {id: 0, brand: "Nike", name: 'Lebron XX "Metallic Gold"', price: "32,000", image: Lebrons1, favorite: false},
        {id: 3, brand: "Puma", name: 'Puma TRC Blaze HC', price: "32,000", image: Puma, favorite: true},
        {id: 5, brand: "Jordans", name: 'Air Jordan 6 "Cool Grey"', price: "54,000", image: Jordans1, favorite: false},
        {id: 6, brand: "Adidas", name: 'Adidas NMD_V3', price: "10,000", image: Adidas, favorite: true},
        {id: 7, brand: "Puma", name: 'Puma TRC Blaze HC', price: "32,000", image: Puma, favorite: false},
    ]
        
    
    const latestSlider = useRef(null);
    const hotestSlider = useRef(null);

    const latestSliderPrevButton = useRef(null);
    const latestSliderNextButton = useRef(null);
    const hotestSliderPrevButton = useRef(null);
    const hotestSliderNextButton = useRef(null);

  return (
    <div className="p-0 m-0 font-roboto">
        <Swiper
        navigation={true} 

        speed={3000}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay ]} //Scrollbar
        // scrollbar={{ hide: true, draggable: true }}
        className="mySwiper"
        >
            <SwiperSlide>
                <div className=" relative pt-16 bg-white h-screen overflow-hidden flex flex-col-reverse justify-center md:gap-4 md:block border-b border-[#f1f1f1]">
                    <div className="w-11/12 h-fit py-8 md:h-full mx-auto flex flex-row justify-start items-center">
                        <div className="w-full md:max-w-[500px] space-y-3 z-50">
                            <h2 className="text-xl font-medium">Latest Kicks</h2>
                            <p className="font-semibold text-4xl md:text-5xl leading-10 md:leading-[60px]">Stack Your Rotation With The Hotest</p>
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Now</p>
                        </div>
                    </div>
                    <img src={window.innerWidth < 768 ? SmallScreenSneakerImage : SneakerImage} alt="" className="w-11/12 h-1/2 max-h-1/2 object-cover object-top mx-auto sm:w-[60%] md:h-fit md:absolute md:-top-32 md:-right-10 md:w-[580px] md:brightness-100" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" relative pt-16 bg-white h-screen overflow-hidden flex flex-col justify-center md:gap-4 md:block border-b border-[#f1f1f1]">
                    <img src={window.innerWidth < 768 ? SmallShirtBgImage : ShirtBgImage} alt="" className="w-11/12 h-1/2 object-cover object-top sm:w-[60%] md:h-[98%] md:absolute md:bottom-0 md:left-0 md:w-[500px] md:brightness-100 transform -scale-x-[1]" />
                    <div className="w-11/12 h-fit py-8 md:h-full mx-auto flex flex-row justify-end items-center">
                        <div className="w-full md:max-w-[500px] space-y-3 z-50">
                            <h2 className="text-xl font-medium">Latest Fits</h2>
                            <p className="font-semibold text-4xl md:text-5xl leading-10 md:leading-[60px]">One-Stop Shop For Designer Threads</p>
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Coming Soon</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <div className="py-8 border-b">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full flex flex-row justify-between items-center gap-4">
                    <div>
                        <p className="text-2xl font-semibold">Latest Release</p>
                        <p className="font-medium ">Discover the latest trend. Shop our new arrivals now</p>
                    </div>
                    <div className="flex flex-row gap-4 ">
                        <div className="h-6 w-6">
                            <svg viewBox="0 0 1024 1024" ref={latestSliderPrevButton} onClick={() => latestSlider.current.slidePrev()} className="icon fill-black hover:fill-slate-600 cursor-pointer" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="h-6 w-6 rotate-180">
                            <svg viewBox="0 0 1024 1024" ref={latestSliderNextButton} onClick={() => latestSlider.current.slideNext()} className="icon fill-black hover:fill-slate-600 cursor-pointer" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" ></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <Swiper
                    ref={latestSlider}
                    spaceBetween={15}
                    // navigation={{
                    //     nextEl: latestSliderNextButton.current,
                    //     prevEl: latestSliderPrevButton.current,
                    // }}
                    slidesPerView={window.innerWidth < 640 ? 1 : window.innerWidth >= 640 &&  window.innerWidth < 768 ? 2
                                    : window.innerWidth >= 768 &&  window.innerWidth < 1280 ? 3 : 4}
                    onBeforeInit={(swiper) => {
                        latestSlider.current = swiper;
                    }}
                >
                    {
                        LatestShoesData.map((latestShoe) => (
                            <SwiperSlide>
                                <CatalogueItemContainer id={latestShoe.id} brand={latestShoe.brand} price={latestShoe.price} name={latestShoe.name} imageFile={latestShoe.image} favorite={latestShoe.favorite} />
                            </SwiperSlide>
                        ))
                    }
                    {/* <SwiperSlide>
                        <div className="border cursor-pointer rounded-md">
                            <div className="w-full h-72 relative overflow-hidden">
                                <div className="w-8 h-8 flex flex-row justify-center items-center absolute z-10 right-4 top-4 rounded-md group visited:fill-black">
                                    <FiHeart className="cursor-pointer w-6 h-6 group-visited:fill-black"/>
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
                    </SwiperSlide>*/}
                </Swiper>
                {/* className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"  */}
            </div>
        </div>
        <div  className="py-8 border-b">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full flex flex-row justify-between items-center gap-4">
                    <div>
                        <p className="text-2xl font-semibold">Best Selling</p>
                        <p className="font-medium ">Find your perfect style among our hotest kicks</p> 
                    </div>
                    <div className="flex flex-row gap-4 ">
                        <div className="h-6 w-6">
                            <svg viewBox="0 0 1024 1024" ref={hotestSliderPrevButton} onClick={() => hotestSlider.current.slidePrev()} className="icon fill-black hover:fill-slate-600 cursor-pointer" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="h-6 w-6 rotate-180">
                            <svg viewBox="0 0 1024 1024" ref={hotestSliderNextButton} onClick={() => hotestSlider.current.slideNext()} className="icon fill-black hover:fill-slate-600 cursor-pointer" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" ></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <Swiper
                    ref={hotestSlider}
                    spaceBetween={15}
                    slidesPerView={window.innerWidth < 640 ? 1 : window.innerWidth >= 640 &&  window.innerWidth < 768 ? 2
                                    : window.innerWidth >= 768 &&  window.innerWidth < 1280 ? 3 : 4}
                    onBeforeInit={(swiper) => {
                        hotestSlider.current = swiper;
                    }}
                    >
                    {
                        HotestShoesData.map((latestShoe) => (
                            <SwiperSlide>
                                <CatalogueItemContainer id={latestShoe.id} brand={latestShoe.brand} price={latestShoe.price} name={latestShoe.name} imageFile={latestShoe.image} favorite={latestShoe.favorite} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
        <div className="py-8 border-b">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full">
                    <p className="text-2xl font-semibold">Shop by Collection</p>
                    <div className="mt-2">
                        <p className="font-medium text-sm ">Find your perfect style in our collection list</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
        <div className="py-8 border-b">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full">
                    <p className="text-2xl font-semibold">Style Inspiration</p>
                    <div className="mt-2">
                        <p className="font-medium text-sm ">Join the community. @Hypestrike to be featured</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
        <div className="py-8 ">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full">
                    <p className="text-2xl font-semibold">Trending Brands</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Sneakers