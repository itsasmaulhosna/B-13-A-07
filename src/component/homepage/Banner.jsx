import React from 'react';
import { FaPlus } from "react-icons/fa";

const Banner = () => {
     return (
        <div className='container mx-auto text-center space-y-4 my-10 border-b pt-4'>
            <h2 className='text-3xl font-bold text-black'>Friends to keep close in your life</h2>
            <p className='text-sm font-semibold text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br>
relationships that matter most.</p>
<button className='btn bg-[#244d3f] text-white'><FaPlus />
Add a Friend</button>
<div className='border-b border-gray-50 pb-6'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-4 '>
<div className='shadow-xl p-10  rounded-2xl'>
<h2 className='font-bold text-2xl'>10</h2>
<p className='font-semibold text-sm text-gray-400'>Total Friends</p>
  </div>
<div className='shadow-xl p-10  rounded-2xl'>
<h2 className='font-bold text-2xl'>3</h2>
<p className='font-semibold text-sm text-gray-400'>On Track</p>
  </div>
<div className='shadow-xl p-10 rounded-2xl'>
<h2 className='font-bold text-2xl'>6</h2>
<p className='font-semibold text-sm text-gray-400'>Need Attention</p>
</div>
<div className='shadow-xl p-10  rounded-2xl'>
<h2 className='font-bold text-2xl'>12</h2>
<p className='font-semibold text-sm text-gray-400 '>Interaction This Month</p>
</div>
</div>
</div>
        </div>
    );
};

export default Banner;