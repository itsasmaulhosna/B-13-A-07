import React from 'react';
import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#244d35] py-12'>
            <div className='container mx-auto py-4 text-center text-white my-5 space-y-4'>
                <h2 className='text-4xl font-bold text-white '>KeenKeeper</h2>
                <p className='text-sm text-gray-400'>our personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h3 className='text-xl'>Social Links</h3>
                <div className='flex items-center justify-center gap-4 mt-2 '>
                    <TiSocialInstagram  className='text-2xl border rounded-full p-1 text-black bg-white  '/>
<FaFacebookSquare className='text-2xl border rounded-full p-1 text-black bg-white'  />
<FaXTwitter className='text-2xl border rounded-full p-1 text-black bg-white '/>

                </div>
                <div className='border-t-1 pt-4 mt-5 border-gray-500'>
                    <div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
<p>© 2024 KeenKeeper. All rights reserved.</p>
<div className='flex items-center gap-4 mt-2 md:mt-0'>
<p >Privacy Policy</p>
                            <p >Terms of Service</p>
                            <p >Cookies</p>

</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;