
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/Darktheme';
// import Home from './component/Home/Home';
// import RestaurantDetails from './component/Restaurant/RestaurantDetails';
// import Cart from './component/Cart/Cart';
// import Profile from './component/Profile/Profile';
import CustomerRoute from './Routers/CustomerRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { findCart } from './component/State/Cart/Action';
import Routers from './Routers/Routers';
import { getRestaurantByUserId } from './component/State/Restaurant/Action';
// import { store } from './component/State/store';

function App() {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const { auth } = useSelector(store => store)
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt))

    dispatch(findCart(jwt))
  }, [auth.jwt])

  useEffect(() => {
    dispatch(getRestaurantByUserId(auth.jwt || jwt));

  },[auth.user])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
       {/* <Navbar/> */}
      <Routers />
    </ThemeProvider>
  );
}

export default App;
