import React from 'react';
import MyNavlink from './MyNavlink';
import { IoMdHome } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";




const Navbar = () => {
    return (
        <div className='shadow'>
<div className='container mx-auto flex items-center justify-between py-4'>
    <div>
        <h2 className='text-3xl font-bold'>Keen
            <span className='text-3xl font-semibold text-[#244d35]'>Keeper</span>
             </h2>
    </div>
    
        <ul className='flex flex-col  md:flex-row items-center gap-6'>
            <li >
                <MyNavlink to={'/'}>
                <IoMdHome />
                    Home

</MyNavlink>
            </li>
            <li>
                <MyNavlink to={'/about'}><RiTimeLine />
Timeline</MyNavlink>
            </li>
                <li>
                    <MyNavlink to={'/contact'}><TfiStatsUp />
Stats</MyNavlink>
                </li>
            
        </ul>
    </div>
</div>
        
    );
};

export default Navbar;