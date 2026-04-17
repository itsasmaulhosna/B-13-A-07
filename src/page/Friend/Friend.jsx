import React from 'react';

const Friend = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center my-3'>
    <details className="dropdown relative w-72">
  <summary className="btn m-1">open or close</summary>
  <RiArrowDropDownLine
      size={24}
      className="absolute right-20 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
  />
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Text</a></li>
    <li><a>Call</a></li>
    <li><a>Video</a></li>
  </ul>
</details>
</div>
        </div>
    );
};

export default Friend;