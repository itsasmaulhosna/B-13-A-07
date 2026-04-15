import React, { useEffect, useState } from 'react';

const AllFriendHook = () => {
    const [friends,setFriend]=useState([]);
        const [loading,setLoading]=useState(true)
        useEffect(()=>{
    const fetchData=async()=>{
        const res =await fetch('/data.json');
        const data =await res.json();
    setTimeout(() => {
        setFriend(data);
        setLoading(false);
    }, 1000);
        
    }
    fetchData();
        },[])
    return {friends,loading}
};

export default AllFriendHook;