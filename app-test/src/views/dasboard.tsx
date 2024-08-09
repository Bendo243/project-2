import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prac from "./prac";
import Nav from "./nav";
import Header from "./header";
import Main from "./Main";
import Logn from "./logn";
import Face from "./Face";



export default function Dashboard() {
    return(
        <Prac>
            
            <Routes>
                <Route path="/main" element={<Main/>}/>  
                <Route path="/logn" element={<Logn/>}/> 
                <Route path="/Face" element={<Face/>}/> 
        
            </Routes>

        
             
        </Prac>
    )
}