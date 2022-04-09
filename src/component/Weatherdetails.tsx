import React, { useEffect, useState } from 'react'
import { Box, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { TableRow, TableCell, IconButton, Typography, Stack, Avatar, Button } from '@mui/material';



const Weatherdetails = () => {

    const { capital } = useParams()

    const [weatherdata, setweather] = useState(
        {
            capital: '',
            Temp: '',
            Whether_icon: '',
            Wind_speed: '',
            precip:0
        }
    )

    const getweather = (capital:string)=>{
        fetch(`http://api.weatherstack.com/current?access_key=507e787c24bf924d02c9ef4aef46f862&query=${capital}`)
        .then(res => res.json())
        .then((data)=>{
            setweather(
                        {
                            ...weatherdata,
                            capital: data?.location?.name,
                            Temp: data?.current?.temperature,
                            Whether_icon: data?.current?.weather_icons[0],
                            Wind_speed: data?.current.wind_speed,
                            precip: data?.current.precip
                        }
                    )
                    console.log(data)
        })
    }

    useEffect(() => {
        if (capital) {
            getweather(capital)
        }
        console.log(capital);

    },[capital])

    return (
        <div>
            <h1> Current Weather Condition of {weatherdata.capital}</h1>
            <Box
                sx={{ml:20,
                    display: 'non',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 2,
                        width: 1200,
                        height: 200,
                    },
                }}
            >

                <Paper elevation={5} style={{backgroundImage: 'conic-gradient(from 90deg, rgba(210,0,0,0.2), rgb(250,0,10,0.5), rgba(60,0,10,0.5))'}}>
                    <TableRow hover sx={{ mb: 3, '&:last-child td, &:last-child th': { border: 0 } }} >
                        <TableCell sx={{ mr: 2 }} component="th" scope="row">
                            <Button variant="outlined">
                                {weatherdata.capital}.
                            </Button>


                        </TableCell>
                        <TableCell>
                            <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography sx={{ mr: 2 }} style={{color:'white'}}>Temparature 
                            <Typography> </Typography>
                            <Typography style={{color:'black', textAlign:'center'}}>{weatherdata.Temp} Degree Celsius </Typography>
                            </Typography>
                               
                                   
                                   
                                   
                            </Stack>
                        </TableCell>
                        
                        <TableCell>
                            <IconButton aria-label="delete" size="large" >
                                <Typography sx={{ mr: 2 }}>
                                    <Typography style={{color:'white'}}>Wind Speed</Typography>
                                    
                                        <b>{weatherdata.Wind_speed} </b>
                                    
                                    <b>Kilometers/Hour</b>
                                </Typography>
                            </IconButton>  

                        </TableCell>
                        <TableCell>
                        <IconButton sx={{ ml: 2, mr:4 }} aria-label="delete" size="large" >
                                
                                <Typography style={{color:'white'}}>Precip:
                                  <Typography style={{color:'black'}}>{weatherdata.precip}</Typography></Typography>
                            </IconButton>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                        <IconButton aria-label="delete" size="large" >
                                <Avatar
                                    variant="rounded"
                                    src={weatherdata.Whether_icon}
                                    sx={{ width: 56, height: 56 }}
                                />

                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <Avatar
                        variant="rounded"
                        src={weatherdata.Whether_icon}
                        sx={{ width: 'auto', height: 200}}
                    />
   
                </Paper>
            </Box>

        </div>
    )
}

export default Weatherdetails