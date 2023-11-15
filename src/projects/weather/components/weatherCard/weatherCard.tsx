import moment from "moment";
import { Header, Temperature, TemperatureWrapper, WeatherCardWrapper } from "./weatherCard.styles";

type WeatherCardProps = {
    day: string;
    icon: string;
    weather: string;
    maxTemp: number;
    minTemp: number;
}

export const WeatherCard = ({
    day,
    icon,
    weather,
    maxTemp,
    minTemp,
}: WeatherCardProps) => {
    const date = moment(day);
    const weekday = date.format('dddd').substring(0,3);

    return <WeatherCardWrapper>
        <Header>{weekday.toUpperCase()}</Header>
        <img src={icon} alt='weather'/>
        <p>{weather}</p>
        <TemperatureWrapper>
            <Temperature>{Math.ceil(maxTemp)}</Temperature>
            <Temperature>/</Temperature>
            <Temperature>{Math.ceil(minTemp)}</Temperature>
        </TemperatureWrapper>
    </WeatherCardWrapper>
}