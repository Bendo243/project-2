import { FaQuestion, FaQuestionCircle } from "react-icons/fa";

export default function Face () {
    return(
        <div className="font-sans bg-gray-100">
        <div className=" flex flex-col items-center  h-screen  " >  
            
            <h1 className="text-6xl font-bold text-blue-600 mt-1">facebuiook</h1>

         <div className="flex flex-col items-center mt-10   rounded-lg w-2/4 h-12/12 shadow-xl bg-white p-5 max-w-md ">
          
          <h2 className="text-2xl font-bold fon text-center mb-2 ">Create a new account</h2>
          <p className="text-center mb-4 border-b-2 h-10 w-[100%] text-gray-600">It's quick and easy.</p>
          <form> 
            <div className="flex space-x-2 mb-4 ">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Surname"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Mobile number or email address"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="New password"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label className=" mb-1 flex items-center gap-1">Date of birth <FaQuestionCircle/></label>
              <div className="flex space-x-2">
                <select className="border border-gray-300 p-2 rounded-md w-full">
                  
                  <option>2</option>
                </select>
                <select className="border border-gray-300 p-2 rounded-md w-full">
                  
                  <option>Aug</option>
                </select>
                <select className="border border-gray-300 p-2 rounded-md w-full ">
                  
                  <option>2024</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 flex items-center gap-1">Gender <FaQuestionCircle/></label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-8 border-2 p-2 rounded-md w-full ">
                <span>Female</span>
                  <input type="radio" name="gender" className="form-radio" />
                
                </label>
                <label className="flex items-center space-x-12 border-2 p-2 rounded-md  w-full">
                <span>Male</span>
                <input type="radio" name="gender" className="form-radio" />
                 
                </label>
                <label className="flex items-center space-x-8 border-2 p-2 rounded-md w-full ">
                <span>Custom</span>
                 <input type="radio" name="gender" className="form-radio " />
                 
                </label>
              </div>
            </div>
            <p className="text-xs mb-4">
              People who use our service may have uploaded your contact information to Facebook. <a href="#" className="text-blue-600">Learn more.</a>
            </p>
            <p className="text-xs mb-4">
              By clicking Sign Up, you agree to our <a href="#" className="text-blue-600">Terms, Privacy Policy and Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.
            </p>
            <div className="flex flex-col items-center">
            <button className="bg-green-600 text-white p-2 rounded-md w-2/4 font-bold text-lg">Sign Up</button>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-blue-600 hover:underline">Already have an account?</a>
            </div>
          </form>
        </div>
        {/* <footer className="bg-white py-4 border-t border-gray-200 w-full mt-10">
      <div className="container mx-auto px-4">
        <div className="flex  items-center justify-center mb-4 border-b-2 p-1">
          <div className="flex space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:underline">English (UK)</a>
            <a href="/" className="hover:underline">Hausa</a>
            <a href="/" className="hover:underline">Français (France)</a>
            <a href="/" className="hover:underline">Português (Brasil)</a>
            <a href="/" className="hover:underline">Español</a>
            <a href="/" className="hover:underline">العربية</a>
            <a href="/" className="hover:underline">Bahasa Indonesia</a>
            <a href="/" className="hover:underline">Deutsch</a>
            <a href="/" className="hover:underline">日本語</a>
            <a href="/" className="hover:underline">Italiano</a>
            <a href="/" className="hover:underline">हिन्दी</a>
            <button className="hover:underline">+</button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center space-x-2 text-xs text-gray-500 mb-4">
          <a href="/" className="hover:underline">Sign Up</a>
          <a href="/" className="hover:underline">Log in</a>
          <a href="/" className="hover:underline">Messenger</a>
          <a href="/" className="hover:underline">Facebook Lite</a>
          <a href="/" className="hover:underline">Video</a>
          <a href="/" className="hover:underline">Places</a>
          <a href="/" className="hover:underline">Games</a>
          <a href="/" className="hover:underline">Marketplace</a>
          <a href="/" className="hover:underline">Meta Pay</a>
          <a href="/" className="hover:underline">Meta Store</a>
          <a href="/" className="hover:underline">Meta Quest</a>
          <a href="/" className="hover:underline">Meta AI</a>
          <a href="/" className="hover:underline">Developers</a>
          <a href="/" className="hover:underline">Careers</a>
          <a href="/" className="hover:underline">Privacy</a>
          <a href="/" className="hover:underline">Cookies</a>
        </div>
        <div className="text-center text-xs text-gray-500">
          Meta © 2024
        </div>
      </div>
    </footer> */}
      </div>
      
      </div>
    )
}