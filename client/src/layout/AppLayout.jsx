import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const AppLayout = () => {
  return (
    <div className='min-h-dvh mx-2'>
        <ScrollToTop />
        <Header/>
        <main className='my_container bg-[#212121] border border-[#353434] mb-4 rounded-xl'>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default AppLayout