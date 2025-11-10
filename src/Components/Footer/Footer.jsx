import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='bg-[#238b45]'>
                <div className='max-w-11/12 mx-auto py-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-white'>
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
                       <div className='mt-6 text-[#edf8e9] flex gap-3'>

                        {/* facebook */}

                        <a href="https://www.facebook.com/programmingHero" target="_blank" rel="noopener noreferrer">

                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook hover:scale-125"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        
                        </a>
                        

                          {/* youtube */}
                          
                        <a href="https://www.youtube.com/c/ProgrammingHero" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube hover:scale-125"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg></a>
                        

                        {/* instagram */}

                        <a href="https://www.instagram.com/programminghero?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" 
                        class="lucide lucide-instagram-icon lucide-instagram hover:scale-125"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                        
                        {/* twitter */}

                        <a href="https://x.com/ProgrammingHero" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter hover:scale-125"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
                        
                       </div>
                   
                   
                </div>
                <div className='max-w-11/12 mx-auto'>
                <hr className='text-[#edf8e9] mt-3'/>
                <p className='text-[#edf8e9] mt-3 text-center font-medium py-5' >Copyright reserved by @2025</p></div>
                
            </footer>
    );
};

export default Footer;