import {ClipLoader} from 'react-spinners'

const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="text-base font-semibold text-[#FFFFFF]">Sending</span>
       <ClipLoader size={16} color="#ffffff" />
    </div>
  )
}

export default Loader