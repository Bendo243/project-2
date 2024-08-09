import { ReactNode } from "react";
import Nav from "./nav";
import Header from "./header";

export default function Prac(props: {children: ReactNode}){
   return (
    <div className="flex w-[100vw] h-[100vh] overflow-hidden">
        <div className="h-full w-[250px] bg-gray-400">
                <Nav/>
        </div>
        <section className="w-[calc(100vw-250px)] h-full">
            <div className="h-[70px] w-full bg-orange-400"><Header/></div>
            <div className="h-[calc(100vh-70px)]  overflow-y-auto"> 
               {props.children}
            
            </div>
        </section>
    
</div>
)}

