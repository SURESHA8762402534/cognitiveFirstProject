import React, { useState } from 'react'
import { Box, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { TableRow, TableCell, IconButton, Typography, Stack, Avatar, Button } from '@mui/material';
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
    },[country])
    return (
        <div >
            <Box 
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

                <Paper elevation={5}  style={{backgroundImage: 'linear-gradient(to right, rgba(210,0,0,0), rgba(230,0,0,0.5))'}} >
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
                                <Typography sx={{ mr: 2 }}>
                                    <Button color="error">
                                        population: {contryDetailes.population}
                                    </Button>

                                </Typography>
                            </IconButton>
                            <IconButton aria-label="delete" size="large" >
                                <Typography>
                                    Latitude: {contryDetailes.latitude}
                                </Typography>
                                <Typography sx={{ mr: 5, ml: 2 }}>
                                    Longitude: {contryDetailes.longitude}
                                </Typography>
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

                    {/* <img src={contryDetailes.imageurl} alt="Symbol" /> */}
                </Paper>
            </Box>


        </div>
    )
}

export default Countrydetails