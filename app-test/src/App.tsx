import { BrowserRouter, Route, Routes, } from 'react-router-dom'

import Login from './views/Login'
import Dashboard from './views/dasboard'


function App() {
 
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/login"  element={<Login/>} />
          <Route path="/*" element={<Dashboard/>}/> 
        </Routes>
        </BrowserRouter>
  )
}

export default App
