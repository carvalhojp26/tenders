import { NavLink } from 'react-router-dom';
import { AiFillFile } from "react-icons/ai";
import { FaHouse } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";

export default function Aside() {
    return (
        <aside className="fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-custom-gray bg-white">
            <div>
                <h6 className="py-6 px-8 text-center font-bold text-lg">Info Tenders</h6>
            </div>
            <div className="p-4 font-semibold text-gray-600">
                <ul className="mb-6">
                    <li><NavLink to="/" className={({ isActive }) => `flex items-center p-3 rounded-xl mb-2 transition-colors duration-300 transition-shadow hover:shadow-lg ${isActive ? 'bg-custom-black text-white' : 'hover:bg-gray-100'}`}>
                            <FaHouse className='mx-2'/> Introduction
                        </NavLink>
                    </li>
                    <li><NavLink to="/dashboard" className={({ isActive }) => `flex items-center p-3 rounded-xl transition-colors duration-300 transition-shadow hover:shadow-lg ${isActive ? 'bg-custom-black text-white' : 'hover:bg-gray-100'}`}>
                            <AiFillFile className='mx-2'/>Dashboard
                        </NavLink>
                    </li>
                </ul>
                <h6 className='mb-2 pl-1 text-sm text-gray-800'>AUTH PAGES</h6>
                <ul>
                    <li><NavLink to="/signin" className={({ isActive }) => `flex items-center p-3 rounded-xl mb-2 transiton-colors duration-300 transition-shadow hover:shadow-lg ${isActive ? 'bg-custom-black text-white' : 'hover:bg-gray-100'}`}>
                            <BsPersonCircle className='mx-2'/>Sign In    
                        </NavLink>
                    </li>
                    <li><NavLink to="/signup" className={({ isActive }) => `flex items-center p-3 rounded-xl transition-colors duration-300 transition-shadow hover:shadow-lg ${isActive ? 'bg-custom-black text-white' : 'hover:bg-gray-100'}`}>
                            <BsPersonCircle className='mx-2'/>Sign Up    
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
 