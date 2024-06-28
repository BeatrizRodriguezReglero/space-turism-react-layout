import {  Route, Routes } from "react-router-dom"
import Layout from "../layouts/Layout"
import Home from "../pages/Home"
import Crew from "../pages/Crew"
import Destination from "../pages/Destination"
import Technology from "../pages/Technology"



const Router =()=>{
    return(
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/Crew' element={<Crew/>}></Route>
                <Route path='/Destination' element={<Destination/>}></Route>
                <Route path='/Technology' element={<Technology/>}></Route>
               
            </Route>
                
        </Routes>
    )

}
export default Router