import DotTitle from '../components/Dot_Title';

const About = () => {
  return (
    <div className='mx-5 mt-4'>
      
      {/* Title and para */}
      <div className='mb-8'>
        <DotTitle title="About"/>
        <h1 className="font-[inter] font-semibold text-4xl text-white mt-6 mb-4">It's Me Paras</h1>
        <p className='font-[inter] text-[#c0c0c0] text-[18px] mb-3 leading-relaxed w-full break-words'>I'm a passionate Software Development Engineer with expertise in building excellent digital experiences. I specialize in frontend development while maintaining a strong foundation in full-stack technologies.</p>
        <p className='font-[inter] text-[#c0c0c0] text-[18px] leading-relaxed w-full break-words'>Beyond coding, I enjoy travelling, exploring new technologies, and building projects.</p>
      </div>

      {/* Profile Pic */}
      <div className='flex items-center justify-center mb-8'>
        <img src="https://res.cloudinary.com/dxxeks4o5/image/upload/v1749978802/qf2mkz_btchk5.jpg" alt="paras image" className='w-md h-md bg-[#373737] p-3 rounded-lg hover:scale-95 transition-transform duration-400 ease-in-out'/>
      </div>

      {/* Education */}
      <div className='flex flex-col gap-4 mb-6'>
        <DotTitle title="Education"/>
      
        {/* college */}
        <div className='mx-4 mb-3 border border-[#4d4a4a] rounded-lg px-3 py-3'>
          <div className='flex items-center justify-between'>
            <span className='text-white font-[inter] text-[18px] sm:text-xl'>Guru Gobind Singh Indraprastha University</span>
            <span className='font-[inter] text-[#dbcaca] text-sm sm:text-[18px]'>2021-2025</span>
          </div>

          <span className='italic text-[#dbcaca] text-sm'>(Bachelor of Technology (B.Tech.) in Computer Science)</span>
      
          <ul className='mt-3'>
            <li className='list-disc ml-4 font-[inter] text-[#dbcaca] text-sm sm:text-[18px]'>Comprehensive study of computer science fundamentals</li>
            <li className='list-disc ml-4 font-[inter] text-[#dbcaca] text-sm sm:text-[18px]'>Courese Focused on: Data Structures & Algorithms, Operating Systems, Computer Networks, OOP, SDLC, Databases</li>              </ul>
        </div>
      </div>

      {/* Acheivements */}
      <div className='flex flex-col gap-4'>
        <DotTitle title="Achievements"/>
      
        <div className='mx-3 mb-3 border border-[#4d4a4a] rounded-lg px-3 py-3'>
          <ul className='mt-3 list-disc ml-4 font-[inter] text-[#dbcaca] text-sm sm:text-[18px] space-y-1 break-words'>
            <li>Ranked Top 15 Contributors– GirlScript Summer of Code 2023 (out of 1,500+ participants).</li>
            <li>First Position – IEEE Technorax Hackathon 2022.</li>
            <li>First Position– National Debate Competition, demonstrating public speaking skills.</li>
            <li>HacktoberFest – Contributed to 8+ open-source projects, with 13 merged pull requests</li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default About