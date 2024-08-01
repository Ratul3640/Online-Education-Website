import { NavLink } from "react-router-dom";
import Book from "../../../public/Book.png"

const Navbar = () => {
    return (
        <div className="flex justify-around">
            <div className="flex gap-2 text-center ">
                <div >
                    <img src={Book} alt="" />
                </div>
                <div className="text-lg font-semibold mt-3 text-blue-500 ">Book Store
                </div>
            </div>
            <div className="flex gap-5">
                <NavLink to={'/'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline " : ""
                }>
                    <li className="text-lg font-semibold">Home</li>
                </NavLink>
                <NavLink to={'about us'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline " : ""
                }>
                    <li className="text-lg font-semibold">About Us</li>
                </NavLink>
                <NavLink to={'Courses'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline " : ""
                }>
                    <li className="text-lg font-semibold">Courses</li>
                </NavLink>
                <NavLink to={'/our service'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline " : ""
                }>
                    <li className="text-lg font-semibold">Our Service</li>
                </NavLink>
                <NavLink to={'/concact us'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline " : ""
                }>
                    <li className="text-lg font-semibold">Contact us</li>
                </NavLink>
            </div>
            <div>
                <button className="btn bg-blue-900 text-white">Sign in</button>
            </div>
        </div>
    );
};

export default Navbar;