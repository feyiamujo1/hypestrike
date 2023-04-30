import { useEffect, useRef, useState } from "react"
import SneakerImage from "../../../src/Assest/images/bg_shoe.png"
import SmallScreenSneakerImage from "../../../src/Assest/images/small_screen_bg_shoe.png"
// import ShirtBgImage from "../../../src/Assest/images/bg_shirt.png"
// import SmallShirtBgImage from "../../../src/Assest/images/small_bg_shirt.png"
import Lebrons1 from "../../../src/Assest/images/lebrons.webp"
import Lebrons2 from "../../../src/Assest/images/lebrons_2.webp"
import Lebrons3 from "../../../src/Assest/images/lebron3.webp"
import Lebrons4 from "../../../src/Assest/images/lebron4.webp"
import Lebrons5 from "../../../src/Assest/images/lebron5.webp"

import LebronsLight1 from "../../../src/Assest/images/lebronlight.webp"
import LebronsLight2 from "../../../src/Assest/images/lebronlight5.webp"
import LebronsLight3 from "../../../src/Assest/images/lebronlight3.webp"
import LebronsLight4 from "../../../src/Assest/images/lebronlight4.webp"
import LebronsLight5 from "../../../src/Assest/images/lebronlight2.webp"

import Jordans1 from "../../../src/Assest/images/jordans.webp"
import Jordans2 from "../../../src/Assest/images/jordan3.webp"
import Jordans3 from "../../../src/Assest/images/jordans2.webp"
import Jordans4 from "../../../src/Assest/images/jordan4.webp"
import Jordans5 from "../../../src/Assest/images/jordan5.webp"

import Adidas from "../../../src/Assest/images/adidas.webp"
// import Adidas1 from "../../../src/Assest/images/adidas.webp"
import Adidas2 from "../../../src/Assest/images/adidas2.jpg"
import Adidas3 from "../../../src/Assest/images/adidas3.webp"
import Adidas4 from "../../../src/Assest/images/adidas4.webp"
import Adidas5 from "../../../src/Assest/images/adidas5.webp"

import Huarache from "../../../src/Assest/images/huarache.webp"
import Huarache2 from "../../../src/Assest/images/huarache2.webp"
import Huarache3 from "../../../src/Assest/images/huarache3.webp"
import Huarache4 from "../../../src/Assest/images/huarache4.webp"
import Huarache5 from "../../../src/Assest/images/huarache5.webp"

import Slides from "../../../src/Assest/images/IMG_7797.JPG"
import Slides2 from "../../../src/Assest/images/IMG_7798.JPG"
import Slides3 from "../../../src/Assest/images/IMG_7799.JPG"
import Slides4 from "../../../src/Assest/images/IMG_7800.JPG"
import Slides5 from "../../../src/Assest/images/IMG_7801.JPG"

import NikeLogo from "../../../src/Assest/images/nikelogo.png";
import AdidasLogo from "../../../src/Assest/images/adidaslogo.png";
import ConverseLogo from "../../../src/Assest/images/converselogo.png";
import PumaLogo from "../../../src/Assest/images/pumalogo.png"
import JordanLogo from "../../../src/Assest/images/jordanlogo.png"
import NewBalanceLogo from "../../../src/Assest/images/newbalancelogo.png"

import ShoeCollectionImage from "../../../src/Assest/images/charles-etoroma--z-X3MJ1VOI-unsplash.jpg";
import ClothCollectionImage from "../../../src/Assest/images/fabio-alves-eAUE_FmclYE-unsplash.jpg";
import CapCollectionImage from "../../../src/Assest/images/cappic.jpeg";
// import SunglassesCollectionImage from "../../../src/Assest/images/pexels-emre-vonal-7858515.jpg"
import AssessoriesCollectionImage from "../../../src/Assest/images/ruan-richard-rodrigues-QwRwbZe6dWc-unsplash.jpg"
import PantsCollectionImage from "../../../src/Assest/images/PHOTO-2023-04-26-10-09-08.jpg"
import BagCollectionImage from "../../../src/Assest/images/jessica-radanavong-IchPBHFD0pw-unsplash.jpg"

import JacketCollectionImage from "../../../src/Assest/images/jacket.jpg"
import CustomerCamOneImage from "../../../src/Assest/images/IMG-7670.PNG"
import CustomerCamTwoImage from "../../../src/Assest/images/IMG-7671.PNG"
import CustomerCamThreeImage from "../../../src/Assest/images/IMG-7672.PNG"
import AirBgImage from "../../../src/Assest/images/jordan3bg.jpg"
import NikeBgImage from "../../../src/Assest/images/1252456.jpg"
import YeezyBgImage from "../../../src/Assest/images/pexels-luis-quintero-14212621.jpg"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
// import required modules
import { Autoplay, Scrollbar, EffectFade  } from "swiper"; //Navigation

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import CatalogueItemContainer from "../UI/CatalogueItemContainer"

const Sneakers = () => {
    const LatestShoesData = [
        {id: 0, brand: "Nike", name: 'Lebron XX "Metallic Gold"', price: "32,000", image: Lebrons1, image2: Lebrons2, image3: Lebrons3, image4: Lebrons4, image5: Lebrons5, favorite: false},
        {id: 1, brand: "Jordans", name: 'Air Jordan 1 Mid "Gym Red"', price: "54,000", image: Jordans1, image2: Jordans2, image3: Jordans3, image4: Jordans4, image5: Jordans5, favorite: true},
        {id: 2, brand: "Adidas", name: 'Adidas NMD_V3', price: "10,000", image: Adidas, image2: Adidas2, image3: Adidas3, image4: Adidas4, image5: Adidas5, favorite: false},
        {id: 3, brand: "Nike", name: 'Nike Victori One Slides', price: "20,000", image: Slides, image2: Slides2, image3: Slides3, image4: Slides4, image5: Slides5, favorite: true},
        {id: 4, brand: "Nike", name: 'Lebron XX "Nike Lifer"', price: "32,000", image: LebronsLight1, image2: LebronsLight2, image3: LebronsLight3, image4: LebronsLight4, image5: LebronsLight5, favorite: false},
        {id: 5, brand: "Nike", name: 'Huarache PRM "Enigma Stone"', price: "33,000", image: Huarache, image2: Huarache2, image3: Huarache3, image4: Huarache4, image5: Huarache5, favorite: true},
        {id: 6, brand: "Jordans", name: 'Air Jordan 6 "Cool Grey"', price: "54,000", image: Jordans1, image2: Jordans2, image3: Jordans3, image4: Jordans4, image5: Jordans5, favorite: false},
        {id: 7, brand: "Adidas", name: 'Adidas NMD_V3', price: "10,000", image: Adidas, image2: Adidas2, image3: Adidas3, image4: Adidas4, image5: Adidas5, favorite: false},
        {id: 8, brand: "Nike", name: 'Lebron XX "Nike Lifer"', price: "32,000", image: LebronsLight1, image2: LebronsLight2, image3: LebronsLight3, image4: LebronsLight4, image5: LebronsLight5, favorite: true},
    ]

    const HotestShoesData = [
        {id: 5, brand: "Nike", name: 'Huarache PRM "Enigma Stone"', price: "33,000", image: Huarache, image2: Huarache2, image3: Huarache3, image4: Huarache4, image5: Huarache5, favorite: true},
        {id: 3, brand: "Nike", name: 'Nike Victori One Slides', price: "20,000", image: Slides, image2: Slides2, image3: Slides3, image4: Slides4, image5: Slides5, favorite: true},
        {id: 0, brand: "Nike", name: 'Lebron XX "Metallic Gold"', price: "32,000", image: Lebrons1, image2: Lebrons2, image3: Lebrons3, image4: Lebrons4, image5: Lebrons5, favorite: false},
        {id: 1, brand: "Jordans", name: 'Air Jordan 1 Mid "Gym Red"', price: "54,000", image: Jordans1, image2: Jordans2, image3: Jordans3, image4: Jordans4, image5: Jordans5, favorite: true},
        {id: 2, brand: "Adidas", name: 'Adidas NMD_V3', price: "10,000", image: Adidas, image2: Adidas2, image3: Adidas3, image4: Adidas4, image5: Adidas5, favorite: false},
        {id: 4, brand: "Nike", name: 'Lebron XX "Nike Lifer"', price: "32,000", image: LebronsLight1, image2: LebronsLight2, image3: LebronsLight3, image4: LebronsLight4, image5: LebronsLight5, favorite: false},
        {id: 6, brand: "Jordans", name: 'Air Jordan 6 "Cool Grey"', price: "54,000", image: Jordans1, image2: Jordans2, image3: Jordans3, image4: Jordans4, image5: Jordans5, favorite: false},
        {id: 7, brand: "Adidas", name: 'Adidas NMD_V3', price: "10,000", image: Adidas, image2: Adidas2, image3: Adidas3, image4: Adidas4, image5: Adidas5, favorite: false},
        {id: 8, brand: "Nike", name: 'Lebron XX "Nike Lifer"', price: "32,000", image: LebronsLight1, image2: LebronsLight2, image3: LebronsLight3, image4: LebronsLight4, image5: LebronsLight5, favorite: true},
    ]
        
    
    const latestSlider = useRef(null);
    const hotestSlider = useRef(null);
    const heroSlider = useRef(null);
    const textContainer = useRef(null);

    const latestSliderPrevButton = useRef(null);
    const latestSliderNextButton = useRef(null);
    const hotestSliderPrevButton = useRef(null);
    const hotestSliderNextButton = useRef(null);

    const [sliderIndex, setSliderIndex] = useState(0);

    const displaySliderIndex = () =>{
        setSliderIndex(heroSlider.current.realIndex);
        // console.log(heroSlider.current.realIndex);

    }

    useEffect(() => {
    
        heroSlider.current.on('slideChange', function() {
            if (window.innerWidth > 768){
                // remove the custom class from all slide content elements
                document.querySelectorAll('.slide-content').forEach(el => {
                    el.classList.remove('slide-image-right', 'slide-image-left');
                });

                document.querySelectorAll('.slide-text').forEach(el => {
                    el.classList.remove('slide-text-right', 'slide-text-left');
                });

                // activeIndex
                
                // Add the animation class to the new active slide
                const newActiveSlide = heroSlider.current.slides[heroSlider.current.realIndex];
                newActiveSlide.querySelector('.slide-content').classList.add(heroSlider.current.realIndex % 2 === 0 ? 'slide-image-right' : 'slide-image-left'); // : 
            
                newActiveSlide.querySelector('.slide-text').classList.add(heroSlider.current.realIndex % 2 === 0 ? 'slide-text-left' : 'slide-text-right');
            }
            
        });
    }, []);

  return (
    <div className="p-0 m-0 font-roboto">
        <Swiper
        effect={"fade"}
        fadeEffect={{
            crossFade: true,
        }}
        // loop={true}
        speed={1000}
        // slidesPerView={1}
        autoplay={ window.innerWidth < 768 ? {
            delay: 2500,
            disableOnInteraction: false,
        } : false}
        onSlideChange={() => {displaySliderIndex()}}
        modules={[ Scrollbar, EffectFade, Autoplay ]} // Navigation, Autoplay
        scrollbar={{ draggable: true }} //hide: true,
        onBeforeInit={(swiper) => {
            heroSlider.current = swiper;
        }}
        className="mySwiper relative" 
        >
            <SwiperSlide>
                <div className=" relative pt-10  md:pt-16 bg-[#e7e7e7] h-screen overflow-hidden flex flex-col-reverse justify-center md:gap-4 md:block border-b border-[#f1f1f1]">
                    <div  ref={textContainer} className="w-11/12 h-fit py-8 md:h-full mx-auto flex flex-row justify-start items-center ">
                        <div className="w-full md:max-w-[500px] space-y-3 z-50 slide-text">
                            <h2 className="text-xl">Latest Kicks</h2>
                            <p className="font-semibold text-4xl md:text-5xl leading-10 md:leading-[60px]">Stack Your Rotation With The Hotest</p> {/*Air Jordan 11 "Bred"*/}
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Now</p>
                        </div>
                    </div>
                    <img src={window.innerWidth < 768 ? SmallScreenSneakerImage : SneakerImage} alt="" className="w-11/12 h-1/2 max-h-1/2 object-cover object-top mx-auto sm:w-[60%] md:h-fit md:absolute md:top-0 md:bottom-0 md:my-auto md:right-10 md:w-[600px] md:brightness-100 slide-content" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" relative pt-10  md:pt-16 bg-[#e7e7e7] h-screen overflow-hidden flex flex-col justify-center md:gap-4 md:block border-b border-[#f1f1f1] ">
                    <img src={AirBgImage} alt="" className="w-11/12 h-1/2 max-h-1/2 object-cover object-bottom mx-auto sm:w-[60%] md:h-fit md:absolute md:top-0 md:bottom-0 md:my-auto md:left-10 md:w-[700px] md:brightness-100 slide-content" />
                    <div className="w-11/12 h-fit py-8 md:h-full mx-auto flex flex-row justify-end items-center ">
                        <div className="w-full md:max-w-[500px] space-y-3 z-50 slide-text">
                            <h2 className="text-xl">Latest Kicks</h2>
                            <p className="font-semibold text-4xl md:text-5xl leading-10 md:leading-[60px]">Stack Your Rotation With The Hotest</p>
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Now</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" relative pt-10  md:pt-16 bg-[#ffffff] h-screen overflow-hidden flex flex-col-reverse justify-center md:gap-4 md:block border-b border-[#f1f1f1]">
                    <div className="w-11/12 h-fit py-8 md:h-full mx-auto flex flex-row justify-start items-center">
                        <div className="w-full md:max-w-[500px] space-y-3 z-50 slide-text">
                            <h2 className="text-xl">Latest Kicks</h2>
                            <p className="font-semibold text-4xl md:text-5xl leading-10 md:leading-[60px]">Stack Your Rotation With The Hotest</p>
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Now</p>
                        </div>
                    </div>
                    <img src={NikeBgImage} alt="" className="w-11/12 h-1/2 max-h-1/2 object-contain object-center mx-auto sm:w-[60%] md:h-fit md:absolute md:top-0 md:bottom-0 md:my-auto md:right-10 md:w-[700px] md:brightness-100 slide-content" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" relative pt-10  md:pt-16 bg-[#efedf0] h-screen overflow-hidden flex flex-col justify-center md:gap-4 md:block border-b border-[#f1f1f1]">
                    <img src={YeezyBgImage} alt="" className="w-11/12 h-1/2 max-h-1/2 object-cover object-center mx-auto sm:w-[60%] md:h-fit md:absolute md:top-0 md:bottom-0 md:my-auto md:left-10 md:w-[580px] md:brightness-100 slide-content" />
                    <div className="w-11/12 h-fit py-8 md:h-full mx-auto flex flex-row justify-end items-center">
                        <div className="w-full md:max-w-[500px] space-y-3 z-50 slide-text">
                            <h2 className="text-xl">Latest Kicks</h2>
                            <p className="font-semibold text-4xl md:text-5xl leading-10 md:leading-[60px]">Stack Your Rotation With The Hotest</p>
                            <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5">Shop Now</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <div className="hidden  absolute bottom-20 left-12 md:flex flex-row gap-4 z-[500] items-center">
                <div className="h-6 w-6">
                    <svg viewBox="0 0 1024 1024" onClick={() => heroSlider.current.slidePrev()} className="icon fill-black hover:fill-slate-600 cursor-pointer" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"></path>
                        </g>
                    </svg>
                </div>
                <div>
                    <p className="font-semibold text-lg"><span className="text-3xl">0{sliderIndex + 1}</span>/04</p>
                </div>
                <div className="h-6 w-6 rotate-180">
                    <svg viewBox="0 0 1024 1024" onClick={() => heroSlider.current.slideNext()} className="icon fill-black hover:fill-slate-600 cursor-pointer" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" ></path>
                        </g>
                    </svg>
                </div>
            </div>
        </Swiper>
        <div className="py-8 sm:py-10 md:py-12 border-b">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full flex flex-row justify-between items-center gap-4">
                    <div>
                        <p className="text-2xl font-semibold">Latest Release</p>
                        <p className="">Discover the latest trends. Shop our new arrivals now.</p>
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
                    slidesPerView={window.innerWidth < 640 ? 1 : window.innerWidth >= 640 &&  window.innerWidth < 768 ? 2
                                    : window.innerWidth >= 768 &&  window.innerWidth < 1280 ? 3 : 4}
                    onBeforeInit={(swiper) => {
                        latestSlider.current = swiper;
                    }}
                >
                    {
                        LatestShoesData.map((latestShoe) => (
                            <SwiperSlide>
                                <CatalogueItemContainer id={latestShoe.id} brand={latestShoe.brand} price={latestShoe.price} name={latestShoe.name} imageFile={latestShoe.image} imageFile2={latestShoe.image2} favorite={latestShoe.favorite} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
        <div  className="py-8 sm:py-10 md:py-12 border-b">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full flex flex-row justify-between items-center gap-4">
                    <div>
                        <p className="text-2xl font-semibold">Best Selling</p>
                        <p className=" ">Find your perfect style among our hotest kicks</p> 
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
                                <CatalogueItemContainer id={latestShoe.id} brand={latestShoe.brand} price={latestShoe.price} name={latestShoe.name} imageFile={latestShoe.image} imageFile2={latestShoe.image2} favorite={latestShoe.favorite} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
        <div className="py-12 border-b bg-black">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full text-white">
                    <p className="text-2xl font-semibold">Shop by Collection</p>
                    <p className=" ">Find your perfect style in our collections</p>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="relative h-[480px] sm:h-[550px] md:h-[600px] row-span-2 overflow-hidden group cursor-pointer">
                        <img src={ShoeCollectionImage} alt="" className="h-full w-full object-fill group-active:scale-125 md:group-hover:scale-125 transition-all ease-out duration-700" />
                        <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4  group-hover:bg-[#eff0f2] group-hover:text-black">Sneakers</p>
                    </div>
                    <div className="relative h-[480px] sm:h-[550px] md:h-[600px] row-span-2 overflow-hidden group cursor-pointer">
                        <img src={ClothCollectionImage} alt="" className="h-full w-full object-fill group-active:scale-125 md:group-hover:scale-125 transition-all ease-out duration-700"/>
                        <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4 group-hover:bg-[#eff0f2] group-hover:text-black">Shirts</p>
                    </div>
                    <div className="relative h-[480px] sm:h-[550px] md:h-[600px] row-span-2 overflow-hidden group cursor-pointer">
                        <img src={PantsCollectionImage} alt="" className="h-full w-full object-fill group-active:scale-125 md:group-hover:scale-125 transition-all ease-out duration-700 " />
                        <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4 group-hover:bg-[#eff0f2] group-hover:text-black">Pants</p>
                    </div>
                    <div className="relative h-[480px] sm:h-[550px] md:h-[600px] row-span-2 overflow-hidden group cursor-pointer">
                        <img src={JacketCollectionImage} alt="" className="h-full w-full object-cover group-active:scale-125 md:group-hover:scale-125 transition-all ease-out duration-700"/>
                        <p className="w-fit px-6 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4 group-hover:bg-[#eff0f2] group-hover:text-black">Jackets & Hoodies</p>
                    </div>
                    <div className="relative h-[480px] sm:h-[550px] md:h-[600px] row-span-2 overflow-hidden group cursor-pointer">
                        <img src={CapCollectionImage} alt="" className="h-full object-cover w-full group-active:scale-125 md:group-hover:scale-125 transition-all ease-out duration-700"/>
                        <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4 group-hover:bg-[#eff0f2] group-hover:text-black">Head Gears</p>
                    </div>
                    {/* <div className="relative row-span-1 overflow-hidden group cursor-pointer">
                        <img src={SunglassesCollectionImage} alt="" className="h-full object-cover w-full object-center group-active:scale-125 md:group-hover:scale-125 transition-all ease-out duration-700"/>
                        <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4 group-hover:bg-[#eff0f2] group-hover:text-black">Sunglasses</p>
                    </div> */}
                    <div className="relative h-[292px] row-span-1 overflow-hidden group cursor-pointer">
                        <img src={BagCollectionImage} alt="" className="h-full object-cover object-center w-full group-active:scale-125 md:group-hover:scale-125 transition-all ease-out duration-700"/>
                        <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4 group-hover:bg-[#eff0f2] group-hover:text-black">Bags</p>
                    </div>
                    <div className="relative h-[292px] row-span-1 overflow-hidden group cursor-pointer">
                        <img src={AssessoriesCollectionImage} alt="" className="h-full object-cover w-full object-center group-active:scale-125 md:group-hover:scale-125 transition-all ease-out duration-700"/>
                        <p className="w-36 px-4 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4 group-hover:bg-[#eff0f2] group-hover:text-black">Assessories</p>
                    </div>

                </div>
            </div>
        </div>
        {/*Dont forget this section
        <div className="py-8 sm:py-10 md:py-12 border-b">
        //     <div className="mx-auto w-11/12 space-y-6">
                
        //     </div>
        //     <div className="mx-auto w-11/12 space-y-6">

        //     </div>
        //     <div className="mx-auto w-11/12 space-y-6">

        //     </div>
        //     <div className="mx-auto w-11/12 space-y-6">

        //     </div>
        </div> */}
        <div className="py-8 sm:py-10 md:py-12 border-b">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full">
                    <p className="text-2xl font-semibold">Style Inspiration</p>
                    <p className=" ">Photos from our customers' cam</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="h-[500px] sm:h-[550px] md:h-[600px] border relative">
                        <img src={CustomerCamOneImage} alt="" className="h-full w-full object-cover"/>
                        <p className="w-fit px-6 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4">Shop Fit</p>
                    </div>
                    <div className="h-[500px] sm:h-[550px] md:h-[600px] border relative ">
                        <img src={CustomerCamTwoImage} alt="" className="h-full w-full object-cover object-bottom"/>
                        <p className="w-fit px-6 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4">Shop Fit</p>
                    </div>
                    <div className="h-[500px] sm:h-[550px] md:h-[600px] border relative">
                        <img src={CustomerCamThreeImage} alt="" className="h-full w-full object-cover"/>
                        <p className="w-fit px-6 py-2 bg-black text-white rounded-md text-center text-lg cursor-pointer font-medium flex flex-row items-center justify-center gap-1.5 absolute mx-auto left-0 right-0 bottom-4">Shop Fit</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-8 sm:py-10 md:py-12 ">
            <div className="mx-auto w-11/12 space-y-6">
                <div className="w-full">
                    <p className="text-2xl font-semibold">Trending Brands</p>
                    <p className=" ">Brands with unique trends and the latest fits</p>
                </div>
                <div className="flex flex-wrap justify-between gap-4">
                    <div className="border h-[100px] w-[100px] md:h-[110px] md:w-[110px] xl:h-[140px] xl:w-[140px] rounded-full flex justify-center items-center">
                        <img src={NikeLogo} alt="" className="w-9/12" />
                    </div>
                    <div className="border h-[100px] w-[100px] md:h-[110px] md:w-[110px] xl:h-[140px] xl:w-[140px] rounded-full flex justify-center items-center">
                        <img src={AdidasLogo} alt="" className="w-9/12" />
                    </div>
                    <div className="border h-[100px] w-[100px] md:h-[110px] md:w-[110px] xl:h-[140px] xl:w-[140px] rounded-full flex justify-center items-center">
                        <img src={ConverseLogo} alt="" className="w-9/12" />
                    </div>
                    <div className="border h-[100px] w-[100px] md:h-[110px] md:w-[110px] xl:h-[140px] xl:w-[140px] rounded-full flex justify-center items-center">
                        <img src={JordanLogo} alt="" className="w-9/12" />
                    </div>
                    <div className="border h-[100px] w-[100px] md:h-[110px] md:w-[110px] xl:h-[140px] xl:w-[140px] rounded-full flex justify-center items-center">
                        <img src={PumaLogo} alt="" className="w-9/12" />
                    </div>
                    <div className="border h-[100px] w-[100px] md:h-[110px] md:w-[110px] xl:h-[140px] xl:w-[140px] rounded-full flex justify-center items-center">
                        <img src={NewBalanceLogo} alt="" className="w-9/12" />
                    </div>
                    {/* <div className="h-36 md:h-[400px] relative border rounded-md p-3 flex flex-col justify-end bg-nike-image bg-center bg-cover bg-no-repeat">
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
                    </div> */}
                </div>
            </div>
        </div>
        <div className="py-8 w-full border-t">
            <div className="w-11/12 mx-auto"> 
                <div className="w-full mb-2">
                    <p className="text-2xl font-semibold ">Exclusive Offers</p>
                    <p>Our services are guaranteed</p>
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

export default Sneakers