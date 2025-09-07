import DotTitle from './Dot_Title'
import { GiLaptop } from "react-icons/gi";
import { LuServer, LuDatabaseZap } from "react-icons/lu";
import { IoMdCode } from "react-icons/io";

const Skills = () => {
  return (
      <div className='my_container bg-[#2C2C2C] mx-2 my-6 pb-1 rounded-lg'>
        
        <div className='pt-6 pl-4'>
          <DotTitle title="Tech Stack"/>
        </div>

        <div className='my-5 flex flex-col gap-4'>
          {/* Frontend */}
          <div className='mx-4 border border-[#4d4a4a] rounded-lg px-3 py-4'>
            <span className='text-white font-[inter] font-bold text-xl sm:text-2xl flex items-center gap-3'><GiLaptop/>Frontend</span>
            <div className='font-[inter] mt-3 flex flex-wrap gap-3'>
              <span className='border border-gray-700 text-[#dbcaca]  text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>HTML/CSS</span>
              <span className='border border-gray-700 text-[#dbcaca]  text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>Javascript</span>
              <span className='border border-gray-700 text-[#dbcaca]  text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>Tailwind</span>
              <span className='border border-gray-700 text-[#dbcaca]  text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>Typescript</span>
              <span className='border border-gray-700 text-[#dbcaca]  text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>ReactJS</span>
            </div>
          </div>

           {/* Backend */}
          <div className='mx-4 border border-[#4d4a4a] rounded-lg px-3 py-4'>
            <span className='text-white font-[inter] font-bold text-xl sm:text-2xl flex items-center gap-3'><LuServer/>Backend</span>
            <div className='font-[inter] mt-3 flex flex-wrap gap-3'>
              <span className='border border-gray-700 text-[#dbcaca] text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>NodeJS</span>
              <span className='border border-gray-700 text-[#dbcaca] text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>Express</span>
               <span className='border border-gray-700 text-[#dbcaca] text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>REST API</span>
            </div>
          </div>

          {/* Database */}
          <div className='mx-4 border border-[#4d4a4a] rounded-lg px-3 py-4'>
            <span className='text-white font-[inter] font-bold text-xl sm:text-2xl flex items-center gap-3'><LuDatabaseZap/>Database</span>
            <div className='font-[inter] mt-3 flex flex-wrap gap-3'>
              <span className='border border-gray-700 text-[#dbcaca] text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>PostgreSQL</span>
              <span className='border border-gray-700 text-[#dbcaca] text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>MongoDb</span>
              <span className='border border-gray-700 text-[#dbcaca] text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>SQL</span>
            </div>
          </div>
          {/* Tools */}
          <div className='mx-4 border border-[#4d4a4a] rounded-lg px-3 py-4'>
            <span className='text-white font-[inter] font-bold text-xl sm:text-2xl flex items-center gap-3'><IoMdCode/>Tools and Other</span>
            <div className='font-[inter] mt-3 flex flex-wrap gap-3'>
              <span className='border border-gray-700 text-[#dbcaca] text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>Git & Github</span>
              <span className='border border-gray-700 text-[#dbcaca] text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>Postman</span>
              <span className='border border-gray-700 text-[#dbcaca] text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>Docker</span>
              <span className='border border-gray-700 text-[#dbcaca] text-sm sm:text-[17px] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'>Prisma(ORM)</span>
            </div>
          </div>
        </div>

      </div>
  )
}

export default Skills