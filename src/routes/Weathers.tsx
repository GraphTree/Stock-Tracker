import {useQuery} from 'react-query';
import { apiFetchWeather, IWeatherSetting } from '../utils/api';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap : 10px;
  background-color:black;
  color : white;
  margin: 30px;
  border-radius:25px;
`;

const City = styled.div`
  grid-column-start:1;
  grid-column-end:4;
  grid-row:1;
  text-align: center;
  background-color:grey;
  padding : 10px;
  border-radius:25px;
  
  
  ;
`
const Info = styled.div`
  grid-row : 2;
  padding : 10px;
  text-align: center;
`

interface WeatherInfo{
  coord:{
    lon:number;
    lat:number;
  },
  weather:[{
    id:number,
    main:string,
    description:string,
    icon:string
  }],
  base:string,
  main:{
    temp:number,
    feels_like:number,
    temp_min:number,
    temp_max:number,
    pressure:number,
    humidity:number
  },
  visibility:number,
  wind:{
    speed:number,
    deg:number
  },
  clouds:{
    all:number
  },
  dt:number,
  sys:{
    type:number,
    id:number,
    country:string,
    sunrise:number,
    sunset:number
  },
  timezone:number,
  id:number,
  name:string,
  cod:number
}

const Cities = ['London', 'Seoul', 'Paris', 'New York', 'Tokyo', 'Rome', 'Berlin', 'Madrid', 'Moscow'];

function CityWeather({cityName}:{cityName:string}) {
  const weatherSetting:IWeatherSetting = {city:cityName}
  const {data, status} = useQuery<WeatherInfo>(['weather', cityName], ()=>apiFetchWeather(weatherSetting));

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'error') {
    return <div>Error!</div>;
  }
  if (status === 'success') {
    return (

      <Wrapper>
        <City>City : {data.name}</City>
        <Info>Weather : {data.weather[0].description}</Info>
        <Info>Temp : {data.main.temp}</Info>
        <Info>Wind Speed : {data.wind.speed}</Info>
      </Wrapper>
    );
  }
  return null;


  
    
  }


function Weathers() {
  return (
    <div>
      {Cities.map(city => (
        <CityWeather key={city} cityName={city} />
      ))}
    </div>
  );
}

export default Weathers;
