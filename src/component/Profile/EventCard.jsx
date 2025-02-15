import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia
            sx={{height:345}} 
            image='https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600'/>

            <CardContent>
                <Typography variant='h5' >
                    Indian Fast Food
                </Typography>
                <Typography variant='body2' >
                    50% off on first order
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"mumbai"}</p>
                    <p className='text-sm text-blue-500'>February 14, 2025 12:00 AM</p>
                    <p className='text-sm text-red-500'>February 15, 2025 12:00 AM</p>
                </div>
            </CardContent>

            { false && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}

export default EventCard