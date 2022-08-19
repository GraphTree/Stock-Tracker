import {authorConfig} from '../config/authorConfig';



export interface IWeatherSetting{
    city: string;
}

export async function apiFetchWeather(weatherSetting:IWeatherSetting){
    console.log(authorConfig.apiKey);
    console.log('fetch start')
    
    const apiKey = authorConfig.apiKey;


    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherSetting.city}&appid=${apiKey}`);
    const json = await response.json();
    // const modifiedJson = JSON.stringify(json)

    console.log(json);

    

    return json
}
