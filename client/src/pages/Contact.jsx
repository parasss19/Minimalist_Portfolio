import { useState } from 'react'
import {toast} from 'react-hot-toast'
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import DotTitle from '../components/Dot_Title';
import axios from 'axios';
import Loader from '../components/Loader';

const Contact = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    message: '',
  })

  const [loading, setLoading] = useState(false);

  const inputHandler = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const BACKENDURL = import.meta.env.VITE_BACKEND_URL;
    
    //if all fields are filled then only run the confetti and toast msg
    if(formData.name && formData.email && formData.message){
      setLoading(true);

      try {
        const {data} = await axios.post(`${BACKENDURL}/contact`, formData);

        if(data.success){
          toast.success(data.message);
          setShowConfetti(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setShowConfetti(false), 3000);
        }else {
          toast.error(data.message);
        } 
      } 
      catch (error) {
        toast.error(error.message);
        console.error("Error:", error);
      }
      finally {
        setLoading(false);
        setFormData({ name: '', email: '', message: '' });  //reset form 
      }
    }
  }


  return (
    <div className='mx-6 mt-5 relative'>
      {showConfetti && <Realistic autorun={{ speed: 0.3 }} />}

      {/* dot and Heading */}
      <div>
        <DotTitle title="Contact"/>
        <h1 className="font-[inter] font-semibold text-3xl sm:text-4xl text-white mt-6 mb-4">Get In Touch</h1>
        <p className='font-[inter] text-[#c0c0c0] text-[16px] sm:text-[18px] mt-6 mb-4 leading-relaxed'>Have a question or want to work together? Feel free to reach out, and I'll get back to you ASAP.</p>
      </div>

      {/* Form */}
      <form onSubmit={submitHandler} className='flex flex-col gap-3 mt-6 mb-5'>
        <div className='flex flex-col gap-3 sm:flex-row'>
          <input 
            type="text" 
            placeholder='Name' 
            name='name' 
            value={formData.name} 
            onChange={inputHandler} 
            required
            className='outline-none p-3 bg-[#2c2c2c] text-sm text-[#FFFFFF] font-[inter] rounded-lg w-full sm:w-1/2'
          />
          <input 
            type="email" 
            placeholder='Email Address' 
            name='email'
            value={formData.email} 
            onChange={inputHandler} 
            required
            className='outline-none p-3 bg-[#2c2c2c] text-sm text-[#FFFFFF] font-[inter] rounded-lg w-full sm:w-1/2'
          />
        </div>
        
        <textarea 
          typeof='text'
          name='message'
          placeholder='Message'
          value={formData.message}
          onChange={inputHandler}
          rows={5}
          className='outline-none p-3 bg-[#2c2c2c] text-sm text-[#FFFFFF] font-[inter] rounded-lg'
          required
        >
          Message
        </textarea>

        <button 
          disabled={loading}  //disable the button while loading(sending smtp req)
          type='submit' 
          className={`bg-[#383838] text-[#FFFFFF] p-3 font-semibold font-[inter] rounded-lg transition-transform duration-300 ${loading ? "opacity-70 cursor-not-allowed" : "active:scale-x-95"}`}
        >
          {loading ? <Loader/> : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default Contact