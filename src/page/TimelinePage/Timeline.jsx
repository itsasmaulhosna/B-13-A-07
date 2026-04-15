import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const Timeline = () => {
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
        </div>
    );
};

export default Timeline;