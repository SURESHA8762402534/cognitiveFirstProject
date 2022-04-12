import React, { useState } from 'react'
import { Box, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { TableRow, TableCell, IconButton, Stack, Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Countrydetails = () => {
    const { country } = useParams()
    const [contryDetailes, setDetailes] = useState({
        countryname: '',
        Capital: '',
        population: 0,
        latitude: 0,
        longitude: 0,
        Flag: '',
        imageurl: ''
    })

    const detailes = async () => {
        const result = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        const [data] = await result.json();
        setDetailes({
            ...contryDetailes,
            countryname: data.name.common,
            Capital: data.capital[0],
            population: data.population,
            latitude: data.capitalInfo.latlng[0],
            longitude: data.capitalInfo.latlng[1],
            Flag: data.flags.png,
            imageurl: data.coatOfArms.png
        })
        console.log(data)
    }

    useEffect(() => {
        if (country) {
            detailes()
        }
    }, [country])
    return (
        <div  >

            <h3 style={{ textAlign: 'center' }}>Country Details</h3>
            <Paper style={{ boxShadow: '5px 10px #888888', border: '1px solid black', width: '25rem', height: '13rem' }} sx={{ p: 5, ml: 65, mr: 70, mt: 10 }}>
                <div style={{ float: 'left' }}>
                    <table  style={{ marginBottom: '3rem' }}>
                        <tr>
                            <td style={{ textAlign: 'left' }}> CountryName  </td>
                            <td style={{ textAlign: 'left' }}>: <b>{contryDetailes.countryname}</b></td>

                        </tr>
                        <tr>
                            <td style={{ textAlign: 'left' }}>Capital </td>
                            <td style={{ textAlign: 'left' }}>: <b>{contryDetailes.Capital}</b></td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'left' }}>Population </td>
                            <td style={{ textAlign: 'left' }}>: <b>{contryDetailes.population}</b></td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'left' }}>Latitude </td>
                            <td style={{ textAlign: 'left' }}>: <b>{contryDetailes.latitude}</b></td>

                        </tr>
                        <tr>
                            <td style={{ textAlign: 'left' }}>Longitude </td>
                            <td style={{ textAlign: 'left' }}>: <b>{contryDetailes.longitude}</b></td>

                        </tr>
                    </table>
                    <Link to={`/weather/${contryDetailes.Capital}`} style={{ textDecoration: 'none' }}>
                        <IconButton aria-label="delete" size="large" >
                            <Button variant="contained">Capital Weather</Button>
                        </IconButton>
                    </Link>
                </div>

                <div style={{ float: 'left' }}>
                    <Avatar
                        variant="rounded"
                        src={contryDetailes.Flag}
                        sx={{ width: 70, height: 70, mt: 7, ml: 10 }}
                    />

                </div>


            </Paper>


            {/* <Box 
                sx={{ml:10,mt:10,
                    display: 'non',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 2,
                        width: 1300,
                        height: 100,
                    },
                }}
            >

                <Paper elevation={5}  style={{backgroundImage: 'linear-gradient(to left, rgba(210,0,0,0), rgba(230,0,0,0.5))'}} >
                    <TableRow hover sx={{ mb: 3, '&:last-child td, &:last-child th': { border: 0 } }} >
                        <TableCell component="th" scope="row">
                            <Button variant="outlined">
                                {contryDetailes.countryname}.
                            </Button>


                        </TableCell>
                        <TableCell>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Button variant='outlined' color="secondary">{contryDetailes.Capital}</Button>
                            </Stack>
                        </TableCell>
                        <TableCell>

                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="delete" size="large" >
                                <tr sx={{ mr: 2 }}>
                                    <Button color="error">
                                        population: {contryDetailes.population}
                                    </Button>

                                </tr>
                            </IconButton>
                            <IconButton aria-label="delete" size="large" >
                                <tr>
                                    Latitude: {contryDetailes.latitude}
                                </tr>
                                <tr sx={{ mr: 5, ml: 2 }}>
                                    Longitude: {contryDetailes.longitude}
                                </tr>
                            </IconButton>

                            <IconButton aria-label="delete" size="large" >
                                <Avatar
                                    variant="rounded"
                                    src={contryDetailes.Flag}
                                    sx={{ width: 56, height: 56 }}
                                />

                            </IconButton>
                            <Link to={`/weather/${contryDetailes.Capital}`} style={{ textDecoration: 'none' }}>
                                <IconButton sx={{ ml: 10 }} aria-label="delete" size="large" >
                                    <Button variant="contained">Capital Weather</Button>
                                </IconButton>
                            </Link>
                        </TableCell>
                    </TableRow>

                   
                </Paper>
            </Box> */}


        </div>
    )
}

export default Countrydetails