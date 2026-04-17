import React, { useContext, useState,useRef } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import AllFriendHook from '../../hooks/AllFriendHook';
import {HashLoader} from 'react-spinners';
import { TimelineSite } from '../../context/Context';
import { IoCall } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoVideocamOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";

const Timeline = () => {
     const {friends,loading}=AllFriendHook()
     const {time}=useContext(TimelineSite)
     console.log(friends,loading);
     const [filter, setFilter] = useState("all");
     const dropdownRef = useRef(null);
     const handleFilter = (type) => {
  setFilter(type);
  dropdownRef.current.removeAttribute("open");
};
     const filteredData =
  filter === "all"
    ? time
    : time.filter(item => item.action === filter);
     const getIcon=(action)=>{
        if(action==='call'){
            return<IoCall className='text-gray-600' />
        }
        else if(action==='text')
        {
            return<LuMessageCircleMore className='text-gray-600' />

        }
        else if(action==='video'){
            return< IoVideocamOutline className='text-gray-600'/>

        }
     }
    return (
        <div className='container mx-auto my-10 space-y-5 lg:pl-20'>
            <h2 className='text-5xl font-bold text-black'>Timeline</h2>
            <div className='flex  my-3'>
    <details ref={dropdownRef}  className="dropdown w-72">
  <summary className="btn m-1 px-20 relative text-gray-400 ">Filter Timeline
    <RiArrowDropDownLine
      size={24}
      className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-900 pointer-events-none"
  />
  </summary>
  
  <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
    <li><a onClick={() => handleFilter("text")}>Text</a></li>
    <li><a onClick={() =>handleFilter ("call")}>Call</a></li>
    <li><a onClick={() => handleFilter("video")}>Video</a></li>
    <li><a onClick={() => handleFilter("all")}>All</a></li>
  </ul>
</details>
</div>
            
            {
                time.length===0?(
                    <div className="flex flex-col items-center justify-center bg-gray-100 py-20 rounded-2xl shadow-md space-y-4">
    
    
    <div className="bg-white p-4 rounded-full shadow">
      <FiClock className="text-4xl text-gray-500" />
    </div>

    
    <h2 className="text-2xl font-bold text-gray-700">
      No Activity Yet
    </h2>

    <p className="text-gray-500 text-center max-w-sm">
      Your timeline is empty. Start interacting to see your activity here.
    </p>

  </div>

                )
                :
                <>
                {
                loading?(
                    (<div className='flex justify-center items-center'>
                     <HashLoader color='#244d3f'/>
                </div>)
                )
                :
                (
                    filteredData.map(item=>{
                    return    <div className='bg-white shadow-lg rounded-xl p-5 flex items-center gap-4 border-l-4 border-gray-200'>
                        <div className="text-2xl">
      {getIcon(item.action)}
    </div>

                        <div>
                            <div className='flex gap-2'>
                                <h2 className='text-lg font-bold'>{item.action} with</h2>
                                <h2 className='text-lg text-gray-500'> {item.name}</h2>
                            </div>
      

      <p className='text-gray-500 text-sm'>
         {item.date}
      </p>
    </div>

                    </div>
                    })
                )
            }
                </>
            }
        </div>
    );
};

export default Timeline;