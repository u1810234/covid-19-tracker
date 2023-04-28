import React, { useState, useEffect } from 'react'
import './Header.css';
import { FormControl, Select, MenuItem } from '@mui/material';

export const Header = () => {
    // https://disease.sh/v3/covid-19/countries
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('worldwide');

    useEffect(() => {
        const getCountries = async () => {
            await fetch('https://disease.sh/v3/covid-19/countries').then((response) => response.json()).then((data) => {
                const countries = data.map((country) => {
                    return {
                        name: country.country,
                        value: country.countryInfo.iso2,
                    };
                })


                setCountries(countries);
            });
        }

        getCountries();
    }, [countries]);

    const handleCountryChange = async (e) => {
        setCountry(e.target.value);
    }

  return (
    <div className='header'>
        <h1>Covid-19 Tracker</h1>

        <FormControl className='header__dropdown'>
            <Select variant="outlined" onChange={handleCountryChange} value={country}>
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {
                    countries && countries.map((country) => {
                        return <MenuItem value={country.value}>{country.name}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    </div>
  )
}
