
import {  useState } from "react";
import { createContext } from "react";

export const TimelineSite=createContext()
const Context=({children})=>{
    const [time,setTime]=useState([])
    const data={
        time,setTime
    }
    return <TimelineSite.Provider value={data}>{children}</TimelineSite.Provider>
}
export default Context;