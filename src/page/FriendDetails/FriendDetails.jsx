import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { BsArchive } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const FriendDetails = () => {
    const {friendId}=useParams()
console.log(friendId);
const friends=useLoaderData();
const expectedFriend=friends.find(friend=>friend.id==friendId);
console.log(expectedFriend)

const {picture,name,days_since_contact,status,tags,bio,goal,next_due_date}=expectedFriend
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
            <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        
        <div className="">
          <div className='bg-white p-3  rounded-2xl shadow text-center'>
            <img
            src={picture}
            className="w-24 h-24 mx-auto  rounded-full"
          />
          <h2 className="text-xl font-semibold mt-4">{name}</h2>

          <div className="space-y-3 mt-2">
            <div className='flex justify-center'>
                    <div className={`rounded-full py-1 px-2 text-sm  ${getStatusStyle(status)}`}>
    {status}
</div>
                </div>
            <div className='flex  justify-center gap-3'>
                    {tags.map(tag=><div className="text-[#244d3f] bg-green-500 rounded-full px-2 py-1">{tag}</div>)}
                </div>
          </div>

          <p className="text-gray-500 italic mt-3">
            {bio}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Preferred: email
          </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-6 space-y-2 ">
            <button className="w-full flex items-center justify-center gap-2  hover:bg-gray-100 bg-white p-3  rounded-2xl shadow text-center">
              <IoNotificationsOutline 
 size={16} /> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-2  bg-white p-3  rounded-2xl shadow text-center hover:bg-gray-100">
              <BsArchive 
 size={16} /> Archive
            </button>
            <button className="w-full flex items-center justify-center gap-2  bg-white p-3  rounded-2xl shadow text-center text-red-500 hover:bg-red-50">
              <MdDeleteOutline 
md size={16} /> Delete
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-2 space-y-6">

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-2xl font-bold text-green-700">{days_since_contact}</h2>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-2xl font-bold text-green-700">{goal}</h2>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-xl font-semibold text-green-700">
                {next_due_date}
              </h2>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div >
              <h3 className="font-semibold text-lg">Relationship Goal</h3>
              <p className="text-black">
                Connect every <span className="font-bold">30 days</span>
              </p>
            </div>
            <button className="shadow-2xl bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-100 ">
              Edit
            </button>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white p-4 rounded-xl shadow mb-5">
            <h3 className="font-semibold text-lg mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">
              <button className="p-4 shadow-xl bg-gray-100 rounded-xl flex flex-col items-center hover:bg-gray-100">
                <FaPhoneVolume />

                <span>Call</span>
              </button>

              <button className="p-4 shadow-xl bg-gray-100 rounded-xl flex flex-col items-center hover:bg-gray-100">
                <MdOutlineTextsms />

                <span>Text</span>
              </button>

              <button className="p-4 shadow-xl bg-gray-100 rounded-xl flex flex-col items-center hover:bg-gray-100">
                <IoVideocamOutline />

                <span>Video</span>
              </button>
            </div>
          </div>

          {/* RECENT INTERACTIONS 
         <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Recent Interactions</h3>
              <button className="border px-3 py-1 rounded-lg text-sm hover:bg-gray-100">
                Full History
              </button>
            </div>

            <div className="space-y-4">
              {["Text", "Meetup", "Video", "Text"].map((type, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{type}</p>
                    <p className="text-gray-500 text-sm">
                      Asked for career advice
                    </p>
                  </div>
                  <span className="text-sm text-gray-400">
                    Jan 28, 2026
                  </span>
                </div>
              ))}
            </div>
          </div> */}

        </div>
      </div>
    </div>

    );
};

export default FriendDetails;