import React, { useEffect } from 'react'
import './Home.css'
import MultiItemCarousel from './MultiItemCarousel'
import RestaurantCard from '../Restaurant/RestaurantCard'
// import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRestaurantsAction } from '../State/Restaurant/Action'
import { useNavigate } from 'react-router-dom'
import { findCart } from '../State/Cart/Action'
import Navbar from '../Navbar/Navbar'

// const restaurants =[1,1,1,1,1,1,1,1]
const Home = () => {
    const dispatch=useDispatch()
    const jwt=localStorage.getItem("jwt")
    const {restaurant} = useSelector(store=>store)
    const navigate=useNavigate()

    console.log("restaurant ",restaurant)

    useEffect(() => {
        dispatch(getAllRestaurantsAction(jwt))
   
    },[])

    

  return (
    
    <div className='pb-10'>
        <>
        <Navbar/>
        <section className='banner -z-50 relative flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 text-center' >
                <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>Fooddy</p>
                <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Taste the Convenience: Food, Fast and Delivered.</p>
            </div>

            <div className='cover absolute top-0 left-0 right-0'>

            </div>

            <div className='fadout'>

            </div>
        </section>
        <section className='p-10 lg:py-10 lg:px-20 pt-10'>
            <p className='text-2xl font-semibold text-gray-400 py-3 pb-8'>Top Meals</p>
            <MultiItemCarousel/>
        </section>
        <section className='px-5 lg:px-20 pt-5'>
            <h1 className='text-2xl font-semibold text-gray-400 pb-5'>Order From Our Handpicked Favorites</h1>
            <div className='flex flex-wrap items-center justify-around gap-5'>
                {
                    restaurant.restaurants.map((item)=> <RestaurantCard item={item}/>)
                }
            </div>
        </section>
        </>
        
    </div>
  )
}

export default Home