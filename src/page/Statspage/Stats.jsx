import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineSite } from '../../context/Context';
import { FiBarChart2 } from "react-icons/fi";

const Stats = () => {
      const {time}=useContext(TimelineSite)

       if (time.length === 0) {
    return (
      <div className='container mx-auto my-6 flex flex-col items-center justify-cente space-y-5'>
        <h2 className='text-3xl md:text-4xl font-bold text-center'>
          Friendship Analysis
        </h2>

        <div className="bg-gray-100 shadow-lg rounded-2xl py-16 px-10 flex flex-col items-center space-y-4 w-full md:w-2/3 justify-center">

    
    <div className="bg-white p-5 rounded-full shadow">
      <FiBarChart2 className="text-5xl text-gray-500" />
    </div>

    
    <h3 className="text-2xl font-bold text-gray-700">
      No Activity Yet
    </h3>

    <p className="text-gray-500 text-center max-w-md">
      Start texting, calling, or video chatting to generate your friendship analytics.
    </p>

  </div>

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
            <h2 className='text-3xl md:text-4xl font-bold text-center'>
        Friendship Analysis
      </h2>
<div className='bg-gray-100 shadow-xl rounded-2xl py-10 lg:mx-25 flex flex-col md:flex-row '>
            
            <div className='md:w-1/2 w-full flex justify-center'>
              <div className='space-y-4  text-center md:text-left '>
        <div className='text-3xl font-semibold text-[#244d3f]'>
          By Interaction Type
        </div>
      </div>
            </div>

      <div className='md:w-1/2 w-full flex justify-center items-center'>
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