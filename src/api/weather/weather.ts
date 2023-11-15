import axios from "axios";

const baseUrl = 'https://api.weatherapi.com/v1';

const key = process.env.REACT_APP_WEATHER_API_KEY;

type getCurrentParams = {
    lat: number;
    long: number;
};

export const getCurrent = async (data: getCurrentParams) => await axios.get(`${baseUrl}/current.json`, 
    {
        params: {
            key: key,
            q: `${data.lat}, ${data.long}`,
        },
    },
);

type getForecastParams = {
    lat: number;
    long: number;
    days: number;
};

export const getForecast = async (data: getForecastParams) => await axios.get(`${baseUrl}/forecast.json`,
    {
        params: {
            key: key,
            q: `${data.lat}, ${data.long}`,
            days: data.days
        },
    },
);