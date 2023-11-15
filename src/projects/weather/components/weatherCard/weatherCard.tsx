import moment from "moment";
import { Condition, ConditionImage, Header, MaxTemp, MinTemp, Temperature, TemperatureWrapper, WeatherCardWrapper } from "./weatherCard.styles";

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
        <ConditionImage src={icon} alt='weather'/>
        <Condition>{weather}</Condition>
        <MaxTemp>{Math.ceil(maxTemp)}°C</MaxTemp>
        <MinTemp>{Math.ceil(minTemp)}°C</MinTemp>
    </WeatherCardWrapper>
}