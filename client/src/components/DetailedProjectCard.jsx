import { ExternalLink } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'

const DetailedProjectCard = ({logoImg, websiteImg, title, description, gitLink, liveLink, techStack}) => {
  return (
        <div className='group px-3 py-3 mx-4 mb-3 mt-5 bg-[#373737] rounded-lg border border-[#4e4c4c] transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-amber-100'>  
            {/* logoImg and title*/}
            <div className='flex gap-4 items-center mb-4'>
              <div className="shrink-0">
                <img src={logoImg} alt="logo" className="w-10 h-10 sm:w-15 sm:h-15"/>
              </div>
              <div className="flex flex-col">
                <span className='text-white font-[inter] font-bold text-xl sm:text-3xl mb-1'>{title}</span>
              </div>
            </div>

            {/* website img */}
            {websiteImg && (
              <div className='mb-4'>
                <img src={websiteImg} alt="website image" className='rounded-lg'/>
              </div>
            )}

            {/* description and tech stack */}
            <div className='flex flex-col gap-3'>
              {Array.isArray(description) && (
                <ul className="list-disc ml-4 text-[#c0c0c0] text-base space-y-1 mb-3">
                  {description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}

              <div className='flex flex-col gap-2'>
                <span className='font-[inter] text-lg sm:text-xl text-[#e0dada] font-semibold'>Tech Stack</span>
                <div className='font-[inter] mb-5 flex flex-wrap gap-3'>
                  {techStack && techStack.map((tech, index) => (
                    <span
                      key={index} 
                      className='border border-gray-700 text-[#dbcaca] px-1.5 py-1 rounded transition-transform duration-200 hover:-rotate-3 hover:scale-105'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
            
            {/* links */}
            <div className="flex gap-2 items-center">
              {gitLink && (
              <a 
                href={gitLink} 
                target="blank"
                className="flex justify-center items-center gap-3 rounded-md bg-[#2f2a2a] px-6 py-2.5 w-1/2 sm:w-fit "
              >
                <span className='font-[inter] font-semibold text-white'>Code</span>
                <FiGithub size={20} className="text-white"/>
              </a>
              )}
    
              {liveLink && (
              <a 
                href={liveLink} 
                target="blank"
                className="flex justify-center items-center rounded-md bg-[#2f2a2a] px-6 py-2 gap-3 w-1/2 sm:w-fit"
              >
                <span className='font-[inter] font-semibold text-white'>Live</span>
                <ExternalLink size={18} className="text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
              </a>
              )}
            </div>
                
        </div>
  )
}

export default DetailedProjectCard