import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="text1" to="/">Home</Link>
          </li>
          <li>
            <Link className="text2" to="/Product">Products</Link>
          </li>
          <li>
            <Link className="text3" to="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;