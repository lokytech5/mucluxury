import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
    
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      
      {/* Start of Navbar Content */}
      <div className="drawer-content">
        
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
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-center items-center space-y-4 no-underline rounded-box">
          <li className="text-center">
            <a className="cursor-pointer">Home</a>
          </li>
          <li className="text-center">
            <a className="cursor-pointer">Demo</a>
          </li>
        </ul>
      </div>
      {/* End of Drawer */}
      {/* Start of Footer */}
      {/* End of Footer */}
    </div>
      <Footer/>
      </>
  )
}
