import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import DotTitle from "./Dot_Title";
import { sendEvent } from "../utils/gaEvent";


const Footer = () => {
  return (
    <div className='my_container bg-[#212121] border border-[#353434] mb-3 rounded-xl'>
      
      <div className="mx-2 mt-4 rounded-xl flex flex-col gap-4 sm:flex-row justify-between items-center">
        <div className="mx-3">
          <DotTitle title="Follow Me"/>
        </div>
        
        <div className='flex items-center gap-3 text-white mx-3'>
          <a 
            href="https://x.com/Paras_tsx" 
            target='blank' 
            className="bg-black px-2 py-2 rounded-full hover:-translate-y-1 transition-transform ease-linear"
            onClick={() =>
              sendEvent({
                action: "social_click",
                category: "Social",
                label: "Twitter",
                value: 1,
              })
            }
          >
            <FaXTwitter className="w-[18px] h-[18px] sm:w-6 sm:h-6"/>
          </a>
          <a 
            href="https://github.com/parasss19" 
            target='blank'
            className="bg-black px-2 py-2 rounded-full hover:-translate-y-1 transition-transform ease-linear"
            onClick={() =>
              sendEvent({
                action: "social_click",
                category: "Social",
                label: "Github",
                value: 1,
              })
            }
          >
            <FiGithub className="w-[18px] h-[18px] sm:w-6 sm:h-6"/>
          </a>
          <a 
            href="https://www.linkedin.com/in/paras-mehta19/" 
            target='blank'
            className="bg-black px-2 py-2 rounded-full hover:-translate-y-1 transition-transform ease-linear"
            onClick={() =>
              sendEvent({
                action: "social_click",
                category: "Social",
                label: "Linkedin",
                value: 1,
              })
            }
          >
            <FaLinkedinIn className="w-[18px] h-[18px] sm:w-6 sm:h-6"/>
          </a>
          <a 
            href="https://peerlist.io/paras19" 
            target='blank'
            className="bg-black p-1.5 rounded-full hover:-translate-y-1 transition-transform ease-linear"
            onClick={() =>
              sendEvent({
                action: "social_click",
                category: "Social",
                label: "Linkedin",
                value: 1,
              })
            }
          >
            <img src="/Peerlist.png" alt="peerlist icon" className="w-[22px] h-[22px] sm:w-[30px] sm:h-[30px]"/>
          </a>
        </div>
      </div>
      
      <div className="mt-4 mb-3">
        <p class="text-sm sm:text-[17px] text-gray-500 text-center font-[inter]">Made with ❤️ and 🍵</p>
        <p class="text-sm sm:text-[17px] text-gray-500 text-center font-[inter]">© 2025 Paras Mehta. All rights reserved.</p> 
      </div>
    </div>
  )
}

export default Footer