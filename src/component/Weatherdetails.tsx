import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Typography, Avatar, Card, CardContent } from '@mui/material';



const Weatherdetails = () => {

    const { capital } = useParams()

    const [weatherdata, setweather] = useState(
        {
            capital: '',
            Temp: '',
            Whether_icon: '',
            Wind_speed: '',
            precip: 0
        }
    )

    const getweather = (capital: string) => {
        fetch(`http://api.weatherstack.com/current?access_key=d81381e7f65ac20a3115570356e0a315&query=${capital}`)
            .then(res => res.json())
            .then((data) => {
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
                
            })
    }

    useEffect(() => {
        if (capital) {
            getweather(capital)
        }

    }, [capital])

    return (
        <div>
            <h3 style={{ textAlign: 'center', marginBottom: '50px' }}> Current Weather Report of {weatherdata.capital}</h3>


            <Card style={{ boxShadow: '5px 10px #888888' }} variant='outlined' sx={{ display: 'flex', ml: 70, mr: 70 }}>
                <div style={{ float: 'left' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h6">
                                City: {weatherdata.capital}.
                            </Typography>
                            <Typography variant="h6" color="text.secondary" component="div">
                                Temparature: {weatherdata.Temp} Degree Celsius
                            </Typography>
                            <Typography variant="h6" color="text.secondary" component="div">
                                Wind Speed: {weatherdata.Wind_speed} k/h
                            </Typography>
                            <Typography variant="h6" color="text.secondary" component="div">
                                Precip: {weatherdata.precip}
                            </Typography>
                        </CardContent>

                    </Box>
                </div>
                <div style={{ float: 'right' }}>
                    <Avatar
                        variant="rounded"
                        src={weatherdata.Whether_icon}
                        sx={{ width: 56, height: 56 ,mt:5}}
                    />
                </div>


            </Card>

        </div>
    )
}

export default Weatherdetails