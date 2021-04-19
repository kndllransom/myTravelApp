import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import countries from "./Countries";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const Locations = (props) => {
  const classes = useStyles();

  

  const handleChangeCountry = (event) => {
    console.log(event.target.value)
    props.setSelectedCountry(event.target.value)
  };

  const handleChangeRegion = (event) => {
    props.setSelectedRegion(event.target.value)
  };

  return (
    <div className="App">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.selectedCountry}
          onChange={handleChangeCountry}
        >
          {countries.map((country, index) => (
            <MenuItem
              value={country.countryName}
              key={index}
            >
              {country.countryName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.selectedRegion}
          onChange={handleChangeRegion}
          disabled={!props.selectedCountry}
        >
          {props.selectedCountry
            ? countries
                .find(({ countryName }) => countryName === props.selectedCountry)
                .regions.map((region, index) => (
                  <MenuItem key={index} value={region.name} key={region.shortCode}>
                    {region.name}
                  </MenuItem>
                ))
            : []}
        </Select>
      </FormControl>
    </div>
  );
};

export default Locations;
