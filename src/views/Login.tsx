import { Button } from "antd"
import {Input} from "antd"
export default function login () {
    return (
        <div className="font-sans">
        <div className="sect flex flex-col items-center  h-screen mt-20  " >  
            
            <h1 className="text-7xl font-bold text-blue-600">facebook</h1>

         <div className="flex flex-col items-center mt-10 border rounded-lg size-2/4 shadow-xl  max-w-md ">
            <h3 className="text-2xl mt-8">Log in to facebook</h3>
            <Input placeholder="Email address or phone number" className="h-10 w-11/12 mb-5 mt-5"/>
            <Input placeholder="Password" className="w-11/12 h-10"  />
            <Button type="primary" className="w-11/12 mt-5 h-14 font-bold text-2xl">Log in</Button>
             
            
            <input type="text" name="password" id="word" />
           <a href="#" className="text-blue-600 hover:underline">forgetten account?</a>
           <div className="relative flex items-center justify-center w-11/12 h-20">
        <div className="relative z-10 bg-white px-4">or</div>
        <div className="center-line"></div>
    </div>
           
    <Button type="primary" className="w-7/12 mb-4 h-14 font-semibold text-2xl BTN">create new account</Button>
           
          </div>
          <footer className="bg-white py-4 border-t border-gray-200 w-full mt-10">
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
    </footer>
           </div>
           
        </div>

        
    )
}
