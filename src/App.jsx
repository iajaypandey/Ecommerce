import { 
  BrowserRouter as Router,
  Routes,
  Route,
  } from 'react-router-dom'

import Homepage from './pages/home/Homepage';
import Nopage from './pages/noPage/Nopage';
import './App.css'
import ProductInfo from './pages/productinfo/ProductInfo';
import ScrollTop from './components/scrollTop/ScrollTop';
import CartPage from './components/cart/Cartpage';
import AllProduct from './pages/allProduct/AllProduct';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import UserDashboard from './pages/user/UserDashboard'
import AdminDashboard from './pages/admin/AdminDashboard';
import UpdateProductPage from './pages/admin/UpdateProductPage';
import MyState from './context/MyState';
import { Toaster } from 'react-hot-toast';
import { ProtectedRouteForUser } from './protectedRoute/ProtectedRouteForUser';
import { ProtectedRouteForAdmin } from './protectedRoute/ProtectedRouteForAdmin';
import AddProductPage from './pages/admin/AddProductPage';
import CategoryPage from './pages/catergory/CategoryPage';

function App() {
  return (
    <MyState>
      <Router>
        <ScrollTop />
            <Routes>
              <Route path='/' element={ <Homepage />}/>
              <Route path='/*' element={<Nopage/>} />
              <Route path='/productInfo/:id' element={<ProductInfo/>} />
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/allproduct' element={<AllProduct/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>} />
              <Route path="/category/:categoryname" element={<CategoryPage />} /> 

              <Route  path='/user-dashboard' element={
                <ProtectedRouteForUser>
                  <UserDashboard/>
                </ProtectedRouteForUser>
              }/>
              <Route path='/admin-dashboard' element={
                <ProtectedRouteForAdmin>
                  <AdminDashboard/>
                </ProtectedRouteForAdmin>
              }/>
              <Route path='/update-product/:id' element={
                <ProtectedRouteForAdmin>
                  <UpdateProductPage/>
                </ProtectedRouteForAdmin>
              }/>
              <Route path='/add-product' element={
                <ProtectedRouteForAdmin>
                  <AddProductPage />
                </ProtectedRouteForAdmin>
              }/>
            </Routes>
            <Toaster/>
      </Router>
    </MyState>
  )
}

export default App
