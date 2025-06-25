import { useState } from 'react';
import { Link, NavLink, Outlet } from "react-router-dom";

function OuterDashboard() {
  const [count, setCount] = useState(0)

  return (
    <div className='loginWrapper'>
      <header>
       <a href="#_" className='logo'>NGS Admin</a>
        <ul>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Signup">Signup</Link></li>
          <li><Link to="/ForgotPassword">ForgotPassword</Link></li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2025 NGS Admin All rights reserved.</p>
      </footer>
    </div>
  )
}

export default OuterDashboard
