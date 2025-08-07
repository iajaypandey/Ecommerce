import { Link, useNavigate } from "react-router-dom"
import Searchbar from '../../components/search/Searchbar';
import { useSelector } from "react-redux";



function Navbar() {
  // get user from localStorage
  const user = JSON.parse(localStorage.getItem('users'));

  // navigate
  const navigate = useNavigate();

  // logout function
  function logout(){
    localStorage.clear('users');
    navigate('/login');
  }

  // CartItems
  const cartItems = useSelector((state) => state.cart);

  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5">

        <li>
            <Link to={'/'}>Home</Link>
        </li>

        <li>
            <Link to={'/allproduct'}>All Product</Link>
        </li>

        <li>
            <Link to={'/signup'}>Sign up</Link>
        </li>

        {user?.role === 'user' && <li>
            <Link to={'/user-dashboard'}>{user?.name}</Link>
        </li>}

        { user?.role === 'admin' && <li>
          <Link to={'/admin-dashboard'}>{user?.name}</Link>
        </li>}

        { user && <li className="cursor-pointer" onClick={logout}>
          Logout
        </li>}

        <li>
            <Link to={'/cart'}>
                Cart({cartItems.length})
            </Link>
        </li>

    </ul>
  )

  return(
    <nav className="bg-pink-500 sticky top-0">

      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">

        <div className="left py-3 lg:py-0">
          <Link to={'/'}>
              <h2 className="font-bold text-white text-2xl text-center">E-Bharat</h2>
          </Link>
        </div>

        {/* right */}
        <div className="right flex justify-center mb-4 lg:mb-0">
          {navList}
        </div>

        {/* search bar */}
        <div>
          <Searchbar/>
        </div>

      </div>
    </nav>
  )
}

export default Navbar