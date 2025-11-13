import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Pages/Provider/AuthProvider';
import { FcBusinessman } from 'react-icons/fc'; 
import '../Header/Navbar.css'
import toast from 'react-hot-toast';


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext); 
    const [dropdownOpen, setDropdownOpen] = useState(false);
      const navigate = useNavigate();

    const handleLogout = () => { 
        signOutUser()
        .then(() => {
            toast.success("Logged out successfully!");
            navigate("/");
        })
        .catch(err => 
            console.log(err));
    };

    return (
        <div>
            <div className='bg-[#edf8e9] shadow-sm'>
            <div className="navbar max-w-11/12 mx-auto">

                <div className="navbar-start">
                    <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#005a32] ">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
                </div>
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li >
                    <NavLink to='/' >Home</NavLink>
                </li>
                <li>
                    <NavLink to='/availableFoods' >Available Foods</NavLink>
                </li>
                
        </ul>
                    </div>
                    <Link to='/' className="flex items-center gap-1 hover:scale-105 ">
                    
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/tableware.png" alt="tableware"/>
                    <h2 className='text-[#005a32] font-bold text-xl'>
                     PlateShare <br /> 
                    </h2>
                     
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-8 ">
                        <li >
                            <NavLink to='/' >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/availableFoods'>Available Foods</NavLink>
                        </li>
                    
                    </ul>
                </div>

                <div className="navbar-end gap-3">
                    {user ? (
                        <div className="relative">
                            <img 
                                onClick={() => setDropdownOpen(!dropdownOpen)} 
                                src={user.photoURL || 'https://img.icons8.com/ios-filled/50/user.png'} 
                                alt="Profile" 
                                className="w-12 h-12 rounded-full cursor-pointer" 
                            />
                            {dropdownOpen && ( 
                                <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                                    <li className="px-4 py-2 text-[#005a32] font-medium hover:bg-gray-100"><Link to='/addFood'>Add Food</Link></li>
                                    <li className="px-4 py-2 text-[#005a32] font-medium hover:bg-gray-100"><Link to='/manageFoods'>Manage My Foods</Link></li>
                                    <li className="px-4 py-2 text-[#005a32] font-medium hover:bg-gray-100"><Link to='/foodRequest'>My Food Requests</Link></li>
                                    <button className="rounded-sm ml-10 px-4 py-2 text-white hover:text-[#238b45] font-medium bg-[#238b45] hover:bg-gray-100 cursor-pointer" 
                                    onClick={handleLogout}>Logout</button>
                                </ul>
                               
                            )}
                        </div>
                    ) : (
                          <Link
                        to="/auth/login" 
                         
                        className='py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-6 cursor-pointer 
                        rounded-sm font-semibold text-sm sm:text-base bg-[#238b45] hover:bg-transparent
                        border-[#238b45] hover:border-[#005a32] border-2 hover:scale-110
                        text-white hover:text-[#005a32] 
                        '>
                         Login
                    </Link> 
                    )
                    }

                </div>
            </div>
        </div>

        </div>
    );
};

export default Navbar;