import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineSite } from '../../context/Context';


const Stats = () => {
      const {time}=useContext(TimelineSite)

       if (time.length === 0) {
    return (
      <div className='container mx-auto my-6'>
        <h2 className='text-4xl font-bold text-center'>
          Friendship Analysis
        </h2>

        <p className='text-2xl font-bold text-center bg-gray-100 py-20 rounded-xl mt-5'>
          No activity yet
        </p>
      </div>
    );
  }
    
      const text = time.filter(item => item.action === "text").length;
const call = time.filter(item => item.action === "call").length;
const video = time.filter(item => item.action === "video").length;
      const data = [
  { name: 'Text', value:text, fill: '#ad46ff' },
  
  { name: 'Call', value: call, fill: '#244d3f' },
  
  { name: 'Video', value: video, fill: '#3C8F60' },
];
    return (
        <div className='container mx-auto my-6 space-y-5 '>
            <h2 className='text-4xl font-bold text-center'>
        Friendship Analysis
      </h2>
<div className='bg-gray-100 shadow-xl rounded-2xl py-10 mx-25 flex flex-col md:flex-row '>
            
            <div className='md:w-1/2 w-full flex justify-center'>
              <div className='space-y-4 md:w-1/2 w-full text-center md:text-left '>
        <div className='text-lg font-semibold text-gray-700'>
          By Interaction
        </div>
      </div>
            </div>

      {/* Chart */}
      <div className='md:w-1/2 w-full flex  items-center'>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            innerRadius={100}
            outerRadius={120}
            cornerRadius={50}
            paddingAngle={5}
            dataKey="value"
          />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>

                  
                  </div>

            
            </div>

        
        
    );
};

export default Stats;