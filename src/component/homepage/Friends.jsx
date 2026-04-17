import React, {  } from 'react';
import FriendCard from '../../ui/FriendCard';
import AllFriendHook from '../../hooks/AllFriendHook';
import {HashLoader} from 'react-spinners';
// const friendsPrommise=fetch('/data.json').then(res=>res.json())
const Friends = () => {
    const {friends,loading}=AllFriendHook()
    console.log(friends,loading)
    // const friends=use(friendsPrommise);
    // console.log(friends)
    return (
        <div className='container mx-auto pt-10 mb-20 '>
           <h2 className='text-xl font-semibold text-center lg:text-left mb-5'>Your Friends</h2>
           {
            loading? (<div className='flex justify-center items-center'>
                   <HashLoader color="#244d3f" /> 
                </div>)
                :
           (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3  lg:gap-8'>
            {
                friends.map(friend=>{
                 return   <FriendCard friend={friend}></FriendCard>
                })
            }
           </div>
           )
           }

        </div>
    );
};

export default Friends;