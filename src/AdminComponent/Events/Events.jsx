import { Box, Button, Grid2, Modal, TextField } from '@mui/material'
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  image:"",
  location:"",
  name:"",
  startedAt:null,
  endsAt:null
}

const Events = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues,setFormValues] = React.useState(initialValues)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formValues);
    setFormValues(initialValues)
  }

  const handleFormChange=(e)=>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
  }
  const handleDateChange = (date,dateType) =>{
    const formatedDate=dayjs(date).format("MMMM DD, YYYY hh:mm A");
    setFormValues({...formValues,[dateType]: formatedDate})
  }

  return (
    <div>
      <div className='p-5'>
        <Button onClick={handleOpen} variant='contained'>Create New Event</Button>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid2 container spacing={3}>
              <Grid2 item xs={12} size={12}>
                <TextField
                  name='image'
                  label='Image URl'
                  variant='outlined'
                  fullWidth
                  value={formValues.image}
                  onChange={handleFormChange}
                /> 
              </Grid2>

              <Grid2 item xs={12} size={12}>
                <TextField
                  name='location'
                  label="Location"
                  variant='outlined'
                  fullWidth
                  value={formValues.location}
                  onChange={handleFormChange}
                />
              </Grid2>

              <Grid2 item xs={12} size={12}>
              <TextField
                  name='name'
                  label="Event Name"
                  variant='outlined'
                  fullWidth
                  value={formValues.name}
                  onChange={handleFormChange}
                />
              </Grid2>

              <Grid2 item xs={12} size={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props}/>}
                    label="Start Date and Time"
                    value={formValues.startedAt ? dayjs(formValues.startedAt) : null}
                    onChange={(newValue) => 
                      handleDateChange(newValue, "startedAt")
                    }
                    format="MM/dd/yyyy hh:mm a"
                    className='w-full'
                    sx={{width:"100%"}}
                  />
                </LocalizationProvider>

              </Grid2>

              <Grid2 item xs={12} size={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props}/>}
                    label="End Date and Time"
                    value={formValues.endsAt ? dayjs(formValues.endsAt) : null}
                    onChange={(newValue) => 
                      handleDateChange(newValue, "endsAt")
                    }
                    format="MM/dd/yyyy hh:mm a"
                    className='w-full'
                    sx={{width:"100%"}}
                  />
                </LocalizationProvider>

              </Grid2>

            </Grid2>
            <Box mt={2}>
              <Button variant='contained' color='primary' type='submit'>
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
      </div>
    </div>
  )
}

export default Events