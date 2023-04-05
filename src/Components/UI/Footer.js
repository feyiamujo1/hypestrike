import { ReactComponent as FbIcon } from "../../../src/Assest/images/fb.svg"
import { ReactComponent as IgIcon } from "../../../src/Assest/images/instagram-svgrepo-com-new.svg"
import { ReactComponent as TwitterIcon } from "../../../src/Assest/images/twitter-3-svgrepo-com.svg"

const Footer = () => {
  return (
    <div className="w-full  m-0 bg-black">
        <div className="w-11/12 mx-auto py-8 box-border">
            <div>
                <p className="text-lg sm:text-lg md:text-xl font-sitka font-black tracking-[1px] cursor-pointer text-white">HYPESTRIKE</p>
            </div>
            <div className="w-full mx-auto py-6 box-border flex flex-row justify-between items-start text-white">
                <div className="">
                    <p className="font-semibold p-0 m-0 pb-1">
                        Quick Links
                    </p>
                    <div className="w-5 h-1 bg-white mt-1 mb-3"></div>
                    <ul className="text-sm font-medium space-y-2.5">
                        <li>
                            About Us
                        </li>
                        <li>
                            Contact Us
                        </li>
                        <li>
                            Terms of Service
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                    </ul>
                </div>
                <div className="">
                    <p className="font-semibold p-0 m-0 pb-1">Social</p>
                    <div className="w-5 h-1 bg-white mt-1 mb-3"></div>
                    <div className="flex flex-row gap-3">
                        <FbIcon className='w-6 h-6 fill-white hover:fill-black cursor-pointer '/>
                        <IgIcon className='w-6 h-6 fill-white hover:fill-black cursor-pointer '/>
                        <TwitterIcon className='w-6 h-6 fill-white hover:fill-black cursor-pointer '/>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-11/12 mx-auto py-3.5 border-t box-border flex flex-row justify-center items-center text-center"> 
            <p className="text-white text-sm font-medium">
                © 2023 Hypestrick. All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer