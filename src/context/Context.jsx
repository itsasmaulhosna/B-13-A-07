
import {  useState } from "react";
import { createContext } from "react";

export const Timeline=createContext()
const Context=({children})=>{
    const [time,setTime]=useState([])
    const data={
        time,setTime
    }
    return <Timeline.Provider value={data}>{children}</Timeline.Provider>
}
export default Context;