import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';

export default function logn() {
  return(
    <div  >
        <div className=''>

        <div className="flex items-center justify-center min-h-screen bg-blue-50 relative">
       <div className=' absolute bottom-0 left-0  clip size-2/4 z-0  bg-custom-bg bg-cover opacity-40'>
       <div className="absolute inset-0 bg-custom-color mix-blend-multiply">
        </div></div>
       <div className='absolute clip2 top-0 right-0 size-5/12 z-0 opacity-40  bg-bustom-bg bg-cover'>
       <div className="absolute inset-0 bg-custom-color mix-blend-multiply"></div>
       </div>


       <div className='absolute clip1 top-40 left-90 size-10 -z-0 bg-white-700 border-2 rounded-full border-cyan-300 '></div>
       <div className='absolute clip1 bottom-20 right-20 size-5 -z-0 bg-white-700 border-2 rounded-full border-cyan-300 '></div>
      <div className="bg-white p-14 rounded-md shadow-lg w-120  z-10  ">
        <div className='absolute clip1 top-20 left-40 size-10 z-0 bg-cyan-400 '></div>
        
        
        <h2 className="text-center text-2xl font-semibold mb-6">Login</h2>
        <form>
          <div className="mb-4 flex border-b-2">
            <label className="block mb-1 text-gray-600" htmlFor="username">
           
            {<UserOutlined className='opacity-30'/>} 
            </label>
            <input
              placeholder='      User Name'
              type="text"
              id="username"
              className="w-full border border-none rounded-md p-1 focus:outline-none focus:ring-o focus:ring-white-400"
            />
            
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-gray-600" htmlFor="password">
            
            </label>
          <div className='flex border-b-2'> {<LockOutlined className='opacity-25'/>}
            <input
             
              type='password'
              id="password"
              placeholder='       Password'
              className="w-full border-blue-500 rounded-md p-1  focus:outline-none focus:ring-0 focus:ring-white-400"
            />
            </div>
          </div>
          <div className='justify-items-center'>
          <button
            type="submit"
            className=" w-2/3   ml-10 bg-gradient-to-r shadow-cyan-200/100 from-cyan-600 to-cyan-200 text-white py-2 rounded-full shadow-md hover:from-cyan-600 hover:to-cyan-500"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  
<div>

</div>
</div>
    </div>
  )
}