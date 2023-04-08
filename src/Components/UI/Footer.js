import { ReactComponent as FbIcon } from "../../../src/Assest/images/fb.svg"
import { ReactComponent as IgIcon } from "../../../src/Assest/images/instagram-svgrepo-com-new.svg"
import { ReactComponent as TwitterIcon } from "../../../src/Assest/images/twitter-3-svgrepo-com.svg"

const Footer = () => {
  return (
    <div className="w-full  m-0 bg-black">
        <div className="w-11/12 mx-auto py-8 box-border grid grid-cols-1 sm:grid-cols-2">
            <div className="text-white mb-4">
                <p className="font-bold font-roboto text-2xl">
                    Subscribe to our newsletter
                </p>
                <p className="text-sm w-full sm:max-w-[380px] mt-2 font-roboto font-medium">
                    Get notified about the latest releases and product drops on our website.
                </p>
                <div className="w-full sm:max-w-[360px] mt-4">
                    <form className="w-full flex flex-row">
                        <input placeholder="Email" className="w-full border-b border-[#eff0f2] font-roboto font-medium text-base p-3 rounded-none bg-transparent focus:bg-none focus:outline-none"/>
                        <button className="border font-roboto font-medium py-3 px-5"> 
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
            <div className="box-border text-white flex flex-row justify-start sm:justify-end">
                <div className="font-roboto">
                    <p className="font-semibold p-0 m-0 pb-1">
                        Quick Links
                    </p>
                    <div className="w-5 h-1 bg-white mt-1 mb-3"></div>
                    <ul className="text-sm font-medium space-y-2.5 ">
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
            <div className="mt-3">
                {/* <p className="font-semibold p-0 m-0 pb-1 text-white">Socials</p>
                <div className="w-5 h-1 bg-white mt-1 mb-3"></div> */}
                <div className="flex flex-row gap-3">
                    <FbIcon className='w-6 h-6 fill-white hover:fill-black cursor-pointer '/>
                    <IgIcon className='w-6 h-6 fill-white hover:fill-black cursor-pointer '/>
                    <TwitterIcon className='w-6 h-6 fill-white hover:fill-black cursor-pointer '/>
                </div>
            </div>
        </div>
        <div className="w-11/12 mx-auto py-3.5 border-t box-border flex flex-row justify-center items-center text-center"> 
            <p className="text-white text-sm font-roboto font-medium">
                © 2023 Hypestrike. All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer