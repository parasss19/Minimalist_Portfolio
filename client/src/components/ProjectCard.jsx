import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({image, title, description, gitLink, liveLink}) => {

  return (
    <>
      <div className='group flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center p-3 mx-4 m-5 bg-[#373737] rounded-lg border border-[#4e4c4c] transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-amber-100'>
          
        {/* img and info */}
        <div className='flex flex-col sm:flex-row gap-3 items-start sm:items-center w-full'>
          <div className="shrink-0">
            <img src={image} alt="logo" className="w-10 h-10 sm:w-12 sm:h-12"/>
          </div>

          <div className="flex flex-col">
            <span className='text-white font-[inter] font-bold text-xl sm:text-2xl mb-1'>{title}</span>
            <p className="font-[inter] text-sm text-[#b6b2b2]">{description}</p>
          </div>
        </div>

        {/* links */}
        <div className="flex gap-2 items-center py-3 w-full sm:w-fit">
          {gitLink && (
          <a 
            href={gitLink} 
            target="blank"
            className="flex justify-center items-center gap-3 p-2 rounded-lg sm:rounded-full bg-[#2f2a2a] w-1/3 sm:w-fit"
          >
            <span className='font-[inter] font-semibold text-white block sm:hidden'>Code</span>
            <FiGithub size={18} className="text-white"/>
          </a>
          )}

          {liveLink && (
          <a 
            href={liveLink} 
            target="blank"
            className="flex justify-center items-center gap-3 p-2 rounded-lg sm:rounded-full bg-[#2f2a2a] w-1/3 sm:w-fit"
          >
            <span className='font-[inter] font-semibold text-white sm:hidden'>Live</span>
            <ExternalLink size={18} className="text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
          </a>
          )}
        </div>
            
      </div>
      </>
  )
}

export default ProjectCard
