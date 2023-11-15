import { useEffect, useState } from "react";
import { WeatherCardsWrapper, WeatherPageWrapper } from "./weather.styles";
import { getForecast } from "../../api";
import { WeatherCard } from "./components";
import moment from "moment";

type WeatherData = {
    day: string;
    icon: string;
    weather: string;
    maxTemp: number;
    minTemp: number;
};

type Location = {
    latitude: number;
    longitude: number;
};

export const Weather = () => {
    const storedWeather = localStorage.getItem('weather');
    const lastDay = moment().add(4, 'days').format('YYYY-MM-DD');

    const [ isLoading, setIsLoading ] = useState(true);
    const [ isLocationLoading, setIsLocationLoading ] = useState(true);
    const [ isError, setIsError ] = useState(false);
    const [ currentWeather, setCurrentWeather ] = useState<WeatherData[] | undefined>(storedWeather ? JSON.parse(storedWeather) as WeatherData[] : undefined);
    const [ location, setLocation ] = useState<Location>();

    useEffect(() => {
        setIsLocationLoading(true);
        navigator.geolocation.getCurrentPosition(function(position) {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
            setIsLocationLoading(false);
        }, function(error) {
            if (error.code === error.PERMISSION_DENIED)
                setIsLocationLoading(false);
        });
    }, []);

    useEffect(() => {
        if(!isLocationLoading){
            setIsLoading(true);
            (async () => {
                try {
                    if (!storedWeather?.includes(lastDay) && location) {
                        const data = await getForecast({
                            lat: location.latitude,
                            long: location.longitude,
                            days: 5,
                        });
        
                        if(data) {
                            setCurrentWeather(data.data.forecast.forecastday.map((daily: any) => {
                                return {
                                    day: daily.date,
                                    icon: daily.day.condition.icon,
                                    weather: daily.day.condition.text,
                                    maxTemp: daily.day.maxtemp_c,
                                    minTemp: daily.day.mintemp_c,
                                };
                            }));
                        }
                    }
                } catch (error) {
                    console.error(error);
                    setIsError(true);
                } finally {
                    setIsLoading(false);
                }
            })();
        }
    }, [storedWeather, lastDay, location, isLocationLoading]);

    useEffect(() => {
        if (currentWeather) {
            localStorage.setItem('weather', JSON.stringify(currentWeather));
        }
    }, [currentWeather])

    return <WeatherPageWrapper>
        {isLoading && 'Loading'}
        {!isLoading && (isError || currentWeather === undefined? 'Error' : 
            <WeatherCardsWrapper>
                {
                    currentWeather.map((weatherInstance) => {
                        return <WeatherCard
                            day={weatherInstance.day}
                            icon={weatherInstance.icon}
                            weather={weatherInstance.weather}
                            maxTemp={weatherInstance.maxTemp}
                            minTemp={weatherInstance.minTemp}
                            key={weatherInstance.day}
                        />
                    })
                }
            </WeatherCardsWrapper>
        )}
    </WeatherPageWrapper>;
}