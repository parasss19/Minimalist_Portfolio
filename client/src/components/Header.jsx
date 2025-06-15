import { CirclePlus, CircleUserRound, HouseIcon, Moon, PanelsTopLeft, Sun } from 'lucide-react'
import { IoPersonCircleOutline, IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className ='my_container sticky top-5 z-10 mt-5 mb-4 py-2 px-4 rounded-xl bg-[#212121] flex items-center justify-between border border-[#353434]'>
      
      {/* left part */}
      <div className=''>
        <ul className='flex items-center gap-1 text-gray-400 cursor-pointer'> 
          <li onClick={() => navigate('/')} className='relative group hover:bg-[#2b2b2b] hover:text-gray-200 px-1.5 rounded-full py-1.5'>
            <IoHomeOutline size={28}/>
            <span className='absolute bottom-full mb-0.5 bg-[#484848] text-white font-[inter] text-xs rounded px-2 py-1 left-0 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out'>Home</span>
          </li>
          <li onClick={() => navigate('/about')} className='relative group hover:bg-[#2b2b2b] hover:text-gray-200 px-1.5 rounded-full py-1.5'>
            <IoPersonCircleOutline size={32}/>
            <span className='absolute bottom-full mb-0.5 bg-[#484848] text-white font-[inter] text-xs rounded px-2 py-1 left-0 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out'>About</span>
          </li>
          <li onClick={() => navigate('/projects')} className='relative group hover:bg-[#2b2b2b] hover:text-gray-200 px-1.5 rounded-full py-1.5'>
            <PanelsTopLeft size={28}/>
            <span className='absolute bottom-full mb-0.5 bg-[#484848] text-white font-[inter] text-xs rounded px-2 py-1 left-0 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out'>Projects</span>
          </li>
        </ul>
      </div>
      
      {/* right part */}
      <div className='flex gap-3 items-center '>
        {/* <div className='flex'>
          <Moon />
          <Sun/>
        </div> */}
        
        <div onClick={() => navigate("/contact")} className='rounded-[6px] bg-[#383838] active:scale-95 transition-transform duration-150'>
          <button 
            className='cursor-pointer flex gap-2 items-center text-sm font-semibold px-[8px] py-1.5 text-white font-[inter]'>
            <CirclePlus size={14}/>
            Hire Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header