import React, { use } from 'react';
import FriendCard from '../../ui/FriendCard';
const friendsPrommise=fetch('/data.json').then(res=>res.json())
const Friends = () => {
    const friends=use(friendsPrommise);
    console.log(friends)
    return (
        <div className='container mx-auto pt-10 mb-20 '>
           <h2 className='text-xl font-semibold mb-5'>Your Friends</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {
                friends.map(friend=>{
                 return   <FriendCard friend={friend}></FriendCard>
                })
            }
           </div>

        </div>
    );
};

export default Friends;