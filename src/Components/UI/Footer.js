import { ReactComponent as FbIcon } from "../../../src/Assest/images/fb.svg"
import { ReactComponent as IgIcon } from "../../../src/Assest/images/instagram-svgrepo-com-new.svg"
import { ReactComponent as TwitterIcon } from "../../../src/Assest/images/twitter-3-svgrepo-com.svg"

const Footer = () => {
  return (
    <div className="w-full  m-0 bg-black">
        <div className="w-11/12 mx-auto py-8 box-border flex flex-row justify-between items-start">
            <div className="text-white my-4">
                <p className="font-bold font-robotomono text-xl">
                    Subscribe to our newsletter
                </p>
                <p className="text-sm font-medium max-w-[380px] mt-2 font-robotomono">
                    Get notified about the latest releases and product drops.
                </p>
                <div className="max-w-[360px] mt-4">
                    <form className="w-full flex flex-row">
                        <input className="w-full border-b border-b-slate-400 font-robotomono font-medium text-base p-3 bg-transparent focus:bg-none focus:outline-none"/>
                        <button className="border font-robotomono text-semibold py-3 px-5"> 
                            Send
                        </button>
                    </form>
                </div>
                <div className="mt-3">
                    <p className="font-semibold p-0 m-0 pb-1">Socials</p>
                    <div className="w-5 h-1 bg-white mt-1 mb-3"></div>
                    <div className="flex flex-row gap-3">
                        <FbIcon className='w-6 h-6 fill-white hover:fill-black cursor-pointer '/>
                        <IgIcon className='w-6 h-6 fill-white hover:fill-black cursor-pointer '/>
                        <TwitterIcon className='w-6 h-6 fill-white hover:fill-black cursor-pointer '/>
                    </div>
                </div>
            </div>
            <div className="w-fit box-border text-white">
                <div className="font-robotomono">
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
                
            </div>
        </div>
        <div className="w-11/12 mx-auto py-3.5 border-t box-border flex flex-row justify-center items-center text-center"> 
            <p className="text-white text-sm font-medium font-robotomono">
                © 2023 Hypestrike. All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer