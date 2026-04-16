import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineSite } from '../../context/Context';


const Stats = () => {
      const {time}=useContext(TimelineSite)
    
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
<div className='bg-gray-100 shadow-xl rounded-2xl p-6 mx-15 flex flex-col md:flex-row items-center justify-between'>
            <div className='space-y-4 md:w-1/2'>
            <div className='text-lg font-semibold text-gray-700 text-left'>
            By Interaction
          </div>
                  <div className='md:w-1/2 w-full  flex justify-center items-center '>
                 
                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1,margin: ' auto' }} responsive>
             <Pie
                data={data}
                 innerRadius="80%"
                 outerRadius="100%"
        //         // Corner radius is the rounded edge of each pie slice
                 cornerRadius="50%"
                fill="#8884d8"
        //         // padding angle is the gap between each pie slice
                 paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
         <Legend/>

         <Tooltip/>
            </PieChart> 
                    </div>
                  
                  </div>

            
            </div>


</div>
        
        
    );
};

export default Stats;