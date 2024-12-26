import { Divider, FormControl, FormControlLabel, Grid2, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './MenuCard';


const catrgories=[
    "Pizza", "biryani", "burger", "rice","chicken"
];
const food_Type=[
    {label:"All", value:"all"},
    {label:"Vegetarian only", value:"vegetarian"},
    {label:"Non-Vegetarian", value:"non_vegetarian"},
    {label:"Seasonal", value:"seasonal"},
];

const menu=[1,1,1,1,1,1];


const RestaurantDetails = () => {
    const [foodType,setFoodType]=useState("all")
    const handleFilter=(e)=>{
        console.log(e.target.value, e.target.name)
    }
  return (
    <div className='px-5 lg:px-20'> 

        <section>
            <h3 className="text-gray-500 py-2 mt-10">Home/India/Indian fast food</h3>

            <div>
                <Grid2 container spacing={2}>
                    <Grid2 item xs={12} >

                        <img className='w-full h-[40vh] object-cover' 
                        src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    </Grid2>

                    <Grid2 item xs={12} lg={6}>

                        <img className='w-full h-[40vh] object-cover' 
                        src="https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </Grid2>

                    <Grid2 item xs={12} lg={6}>

                        <img className='w-full h-[40vh] object-cover' 
                        src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    </Grid2>
                </Grid2>
            </div>

            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed!</p>
                <div className='space-y-3 mt-3'>
                <p className='text-gray-500 flex items-center gap-3'>
                    <LocationOnIcon/>
                    <span>
                        Jaipur, Rajasthan
                    </span>
                </p>
                <p className='text-gray-500 flex items-center gap-3'>
                    <CalendarMonthIcon/>
                    <span>
                         Mon-Sun: 9.00 AM-9.00 PM (Today)
                    </span>
                </p>
                </div>
                
            </div>
        </section>

        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>

            <div className='space-y-10 lg:w-[20%] filter'>
                <div className='box space-y-5 lg:sticky top-28'>
                    <div className=''>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>

                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                {food_Type.map((item) =>
                                    <FormControlLabel 
                                        key={item.value}
                                        value={item.value} 
                                        control={<Radio/>} 
                                        label={item.label}
                                    />
                                )}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider/>

                    <div className=''>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Category
                        </Typography>

                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                {catrgories.map((item) =>
                                    <FormControlLabel 
                                        key={item}
                                        value={item} 
                                        control={<Radio/>} 
                                        label={item}
                                    />
                                )}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>

            <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                {menu.map((item) => <MenuCard/>)}
            </div>

        </section>
    </div>
  )
}

export default RestaurantDetails