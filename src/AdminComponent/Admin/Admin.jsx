import React from 'react'
import AdminSidebar from './AdminSidebar'
// import Navbar from '../../component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '@mui/icons-material'
import Orders from '../Orders/Orders'
import Menu from '../Menu/Menu'
import Events from '../Events/Events'
import FoodCategory from '../FoodCategory/FoodCategory'
import Ingredients from '../Ingredients/Ingredients'
import RestaurantDetails from './RestaurantDetails'
import RestaurantDashboard from '../Dashboard/Dashboard'

const Admin = () => {

    const handleClose=()=>{
        
    }
  return (
    <>
      <div>
        <div className='lg:flex justify-between'>
            <div>

                <AdminSidebar handleClose={handleClose}/>
            </div>
            <div className='lg:w-[80%]'>
              <Routes>
                <Route path='/' element={<RestaurantDashboard/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/category' element={<FoodCategory/>}/>
                <Route path='/ingredients' element={<Ingredients/>}/>
                <Route path='/events' element={<Events/>}/>
                <Route path='/details' element={<RestaurantDetails/>}/>
                
                <Route path='/' element={<Dashboard/>}/>
              </Routes>

            </div>

        </div>
    </div>
    </>
  )
}

export default Admin