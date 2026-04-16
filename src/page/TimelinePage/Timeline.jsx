import React, { useContext } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import AllFriendHook from '../../hooks/AllFriendHook';
import {HashLoader} from 'react-spinners';
import { TimelineSite } from '../../context/Context';
import { IoCall } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoVideocamOutline } from "react-icons/io5";


const Timeline = () => {
     const {friends,loading}=AllFriendHook()
     const {time}=useContext(TimelineSite)
     console.log(friends,loading);
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
        <div className='container mx-auto my-10 space-y-5 pl-20'>
            <h2 className='text-5xl font-bold text-black'>Timeline</h2>
            <div className='relative w-72'>
                <input type='text' placeholder='Filter timeline' className="border rounded-lg px-4 py-2 text-gray-600 shadow-lg"/>
              <RiArrowDropDownLine
    size={24}
    className="absolute right-20 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
/>

            </div>
            
            {
                time.length===0?(<p className='text-2xl font-bold text-center bg-gray-100 py-20 rounded-xl'>No activity yet</p>)
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
                    time.map(item=>{
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