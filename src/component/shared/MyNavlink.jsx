import React from 'react';
import { NavLink } from 'react-router';

const MyNavlink = ({ to, children }) => {
    return (
        <div>
            <NavLink to={to} className={({isActive})=>`font-semibold pb-3 flex gap-2 items-center ${isActive? 'bg-[#244d35] text-white rounded-lg p-3':''}`}>
                {children}
            </NavLink>
        </div>
    );
};

export default MyNavlink;