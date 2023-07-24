import { Link } from "react-router-dom";


const Header = () => {
    const navOptions=<>
     <li><Link to={'/'}>Home</Link></li>
          
     <li><Link to={'/colleges'}>Colleges</Link></li>
     <li><Link to={'/admission'}>Admission</Link></li>
     <li><Link to={'/mycollege'}>My College</Link></li>
          
    
    </>
    return (
        
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            {/* for mobile  */}
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <div>

          <h4 className="  text-xl uppercase">Book college</h4>
          </div>
         
        </div>
        {/* for computer  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
        
    );
};

export default Header;