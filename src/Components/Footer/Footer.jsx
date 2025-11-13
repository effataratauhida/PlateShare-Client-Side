import React from 'react';
import { Link } from 'react-router';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='bg-[#238b45]'>
                <div className='max-w-11/12 mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-white'>
                    <div>
                    <Link to='/' className="flex items-center gap-2 text-[#edf8e9] ">
                   <img width="40" height="40" src="https://img.icons8.com/ios/50/tableware.png" alt="tableware" className="invert brightness-0"/>
                    <h2 className=' font-bold text-xl'>
                    PlateShare <br /> 
                    </h2>
                    </Link>
                    <p className='text-[#edf8e9] font-medium mt-2'>A community-driven platform where users can share surplus food to reduce waste and help others.</p>

                    </div>
                    <div  >
                        <h5 className='text-[#edf8e9] font-medium text-lg'>Contact Us</h5>
                        <ul className='mt-3'>
                            <li >
                                <div className='flex gap-2 items-center text-[#edf8e9]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                                    <p className='font-medium'>+123 2025 224</p>
                            </div>
                            </li>
                            <li>
                                <div className='flex gap-2 items-center text-[#edf8e9]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                                    <p className='font-medium'>256 Avenue, California, USA</p>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-2 items-center  text-[#edf8e9]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                                    <p className='font-medium'>plateshare@gmail.com</p>
                                </div>
                            </li>
                            

                        </ul>
                    </div>
                    {/* social links */}
                    <div><h5 className='text-[#edf8e9] font-medium text-lg'>Connect with Us</h5>
                    <div className='mt-3 text-[#edf8e9] flex gap-3'>

                        {/* facebook */}

                        <a href="https://www.facebook.com/programmingHero" target="_blank" rel="noopener noreferrer">

                        <FaFacebookF className='w-7 h-7 hover:scale-125'/>
                        
                        </a>
                        

                          {/* youtube */}
                          
                        <a href="https://www.youtube.com/c/ProgrammingHero" target="_blank" rel="noopener noreferrer">
                        <PiYoutubeLogoFill className='w-7 h-7 hover:scale-125'/>
                        </a>
                        

                        {/* instagram */}

                        <a href="https://www.instagram.com/programminghero?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                        <FaSquareInstagram className='w-7 h-7 hover:scale-125'/>
                        </a>
                        
                        {/* twitter */}

                        <a href="https://x.com/ProgrammingHero" target="_blank" rel="noopener noreferrer">
                          <FaXTwitter className='w-7 h-7 hover:scale-125'/>
                        </a>
                        
                       </div></div>
                       
                   
                   
                </div>
                <div className='max-w-11/12 mx-auto'>
                <hr className='text-[#edf8e9] mt-3'/>
                <p className='text-[#edf8e9]  text-center 
                font-medium py-5' >Copyright @2025 All Rights Reserved Design by PlateShare</p>
                </div>
                
            </footer>
    );
};

export default Footer;