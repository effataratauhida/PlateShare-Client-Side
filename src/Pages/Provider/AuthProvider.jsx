import React from 'react';

const AuthProvider = ({children}) => {
    return
};

export default AuthProvider;

//  { loading ? (
//                              <span className="loading loading-spinner text-[#395886]"></span>
//                         ) :
//                             user ? (
//                                 <div className="flex items-center gap-3 ">
//                                 {user.photoURL ? (
//                                     <div 
//                                     className=' tooltip tooltip-left' data-tip={user?.displayName  || 'User'}>
//                                         <img 
//                                     src={user.photoURL} 
//                                     alt="Profile" 
//                                     className="w-10 h-10 rounded-full object-cover border-2 border-[#1E2E4F]"
//                                     />
//                                     </div>
                                    
//                                 ) : (
//                                     <div  
//                                      className=' tooltip tooltip-left' data-tip={user?.displayName  || 'User'}>
//                                         <IoPersonCircle size={40} 
//                                     className='text-[#1E2E4F]' 
//                                     />
//                                     </div>
                                     
//                                 )}
//                                    <a onClick={handleSignOut} 
//                                    className=' cursor-pointer rounded-sm 
//                                     hover:scale-105 hover:border-2  hover:border-[#1E2E4F] hover:bg-none
//                                     bg-gradient-to-r from-[#1E2E4F] to-[#395886]  
//                                     py-2 px-3 md:py-2 md:px-6
//                                   text-white hover:text-[#1E2E4F] font-semibold text-base'>
//                                     Log Out</a>
//                                 </div>
//                             ) : (
//                                 <>
//                                 {/* Login btn  */}
//                                 {/* <AnimatedLink 
//                         to="/auth/login" 
//                         onMouseEnter={() => setHovered(true)}
//                         onMouseLeave={() => setHovered(false)}
//                         style={buttonAnimation}  
//                         className=' cursor-pointer rounded-sm bg-gradient-to-r from-[#1E2E4F] to-[#395886]
//                         hover:border-[#1E2E4F] border-2 hover:bg-none text-white hover:text-[#1E2E4F] font-semibold text-sm sm:text-base
//                         py-1 px-2  sm:py-2 sm:px-3 md:py-2 md:px-6'>
//                         Login
//                                 </AnimatedLink> */}
//                                 {/* Register btn */}
//                                 {/* <RegAnimatedLink 
//                                     to="/auth/register" 
//                         onMouseEnter={() => setRegHovered(true)}
//                         onMouseLeave={() => setRegHovered(false)}
//                         style={regButtonAnimation}
//                         className=' cursor-pointer rounded-sm bg-gradient-to-r from-[#1E2E4F] to-[#395886] 
//                         hover:border-[#1E2E4F] border-2 hover:bg-none text-white hover:text-[#1E2E4F] font-semibold text-sm sm:text-base
//                          py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-6'>
//                         Register
//                                 </RegAnimatedLink> */}
//                                 </> 
//                             )
//                         } 