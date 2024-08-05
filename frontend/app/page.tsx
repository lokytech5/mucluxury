import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Drawer from './components/Drawer'


export default function Home() {
  return (
    <>
    
    <div className="drawer lg:drawer-open md:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      
      {/* Start of Navbar Content */}
      <div className="drawer-content flex flex-col">
        
        {/* Start of Navbar */}
        <Navbar/>
        {/* End of Navbar */}
        
        {/* Start of Hero Section */}
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">Welcome to our website. Enjoy your stay!</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        {/* End of Hero Section */}
        
      </div>
      {/* End of Navbar Content */}
      
      {/* Start of Drawer */}
      <Drawer/>
      {/* End of Drawer */}
      {/* Start of Footer */}
      {/* End of Footer */}
    </div>
      <Footer/>
      </>
  )
}
