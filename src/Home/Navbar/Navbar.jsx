import { Link } from "react-router-dom";
// <div className="navbar bg-base-100">


const Navbar = () => {
    return (
        <div className="navbar bg-lime-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'>Home</Link>
                        <Link to='/'>All Toys</Link>
                        <Link to='/mytoy'>My Toy</Link>
                        <Link to='/addtoy'>Add Toy</Link>
                        <Link to='/blogs'>Blogs</Link>

                    </ul>
                </div>
                <a><img className="w-[60px] rounded-[2px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" alt="" /></a>
                <a className="btn btn-ghost normal-case text-xl">Marvel Toys</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8">
                    <Link to='/'>Home</Link>
                    <Link to='/'>All Toys</Link>
                    <Link to='/mytoy'>My Toy</Link>
                    <Link to='/addtoy'>Add Toy</Link>
                    <Link to='/blogs'>Blogs</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="me-4">
                    <Link to='/login'>Login</Link>
                </div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Navbar;