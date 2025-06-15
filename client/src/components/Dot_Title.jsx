
const DotTitle = ({title}) => {
  return (
    <div className="flex item-center gap-3">
        {/* dot */}
        <div className="relative flex items-center justify-center">
            <div className="absolute w-2 h-2 p-1 rounded-full bg-[#616161] opacity-75 animate-ping"></div>
            <div className="relative w-2 h-2 rounded-full bg-[#616161]"></div>
        </div>
        {/* title */}
        <span className="font-[inter] text-[#ddd6d6] font-bold text-[17px] sm:text-[21px]">{title}</span>
    </div>
  )
}

export default DotTitle;