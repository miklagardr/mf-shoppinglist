import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import Categories from './pages/Categories';
import SingleProduct from './pages/SingleProduct';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchOrderList, fetchUser } from './store';
import CategoriesListPage from './pages/CategoriesListPage';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import AdminPage from './Admin/AdminPage';
import Payment from './pages/Payment';
import MyOrders from './pages/MyOrders';
function App() {
  const {login } = useSelector((state)=>{
    return ({
      login: state.user.login,
    })
  })


  const dispatch = useDispatch(); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResult = await dispatch(fetchUser()).unwrap();
        dispatch(fetchOrderList(userResult.username));
      } catch (error) {
        console.error('Error fetching user data:', error);
        console.log('User not logged in');
      }
    };

    fetchData();
  }, [dispatch, login]);


  return (
    <Router>
      <Routes>
        {login ? 
        <>
        <Route path="/" element={<Home />}/>
        <Route path="/home"  element={<Home />}/>
        <Route path="/products" element={<Products/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/singleproduct/:productID' element={<SingleProduct/>}/>
        <Route path='/products/:category' element={<CategoriesListPage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/editprofile' element={<EditProfile/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/orders' element={<MyOrders/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        </> :
        <>
          <Route path="/"  element={<LoginPage />}/>
          <Route path="/home"  element={<LoginPage />}/>
          <Route path="/products" element={<LoginPage/>} />
          <Route path='/categories' element={<LoginPage/>} />
          <Route path='/cart' element={<LoginPage />}/>
          <Route path="/signup" element={<SignUp />}/>
        </>
        }
      </Routes>
    </Router>
  );
}
export default App;
// Install npm install react-router-dom@latests
