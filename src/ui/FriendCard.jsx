import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    const getStatusStyle=(status)=>{
if(status==='Overdue'){
    return "bg-red-500 text-white";

}else if(status==='Almost Due'){
    return "bg-yellow-500 text-white";

}else{
    return "bg-[#244d3f] text-white";

}
    }
    return (
        <Link to={`/friendDetails/${friend.id}`} className="card bg-base-100  shadow-xl">
            
  <figure>
    <img
       src={friend.picture}  className='rounded-full'/>
  </figure>
  <div className="card-body">
    <h2 className="text-xl font-bold text-center">
      {friend.name}
       </h2>
<p className='text-sm text-gray-400 text-center'>{friend.days_since_contact}d ago</p>
    <div className='flex  justify-center gap-3'>
                    {friend.tags.map(tag=><div className="text-[#244d3f] bg-green-500 rounded-full px-2 py-1">{tag}</div>)}
                </div>
                <div className='flex justify-center'>
                    <div className={`rounded-full py-1 px-2 text-sm  ${getStatusStyle(friend.status)}`}>
    {friend.status}
</div>
                </div>
                
  </div>
</Link>
        
    );
};

export default FriendCard;