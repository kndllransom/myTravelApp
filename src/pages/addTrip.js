import React from 'react'
// import { useState } from 'react'
// import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import DatePicker from "react-datepicker";
// import { useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Location from '../components/Locations'
import Activities from '../components/Activities'
import { useDispatch } from 'react-redux';
import { createAddTrip } from '../redux/actions';







const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



export default function Add() {
  
  const dispatch= useDispatch()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(createAddTrip(selectedDate,
        selectedCountry,
        selectedRegion,
        selectedActivity))
    }

    

    const [selectedDate, setSelectedDate] = React.useState();
      console.log(selectedDate)
    

    const [ selectedCountry, setSelectedCountry] = React.useState('')
      console.log(selectedCountry)
    const [ selectedRegion, setSelectedRegion] = React.useState('')
      console.log(selectedRegion)

    const [selectedActivity, setSelectedActivity] = React.useState('');
      console.log(selectedActivity)
    const handleDateChange = (e) => {
      setSelectedDate(e);
    };
    
    const classes = useStyles();
    
  return (

    
    <div>
      <h1>Add Trips Here</h1>
      <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
      <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={(e) => handleDateChange(e)} 
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        {/* </TextField> */}
        </MuiPickersUtilsProvider>

      </div>
      <div>
        <Location setSelectedCountry={setSelectedCountry}
        selectedCountry={selectedCountry}
        setSelectedRegion={setSelectedRegion}
        selectedRegion={selectedRegion}
        />
        
        
      </div>
      <div>
        <Activities 
        setSelectedActivity={setSelectedActivity}
        selectedActivity={selectedActivity}

        />
        
        
        
      </div>
      <button type='submit'> Submit </button>
    </form>

    </div>
  )
}
