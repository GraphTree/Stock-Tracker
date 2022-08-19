import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Weathers from './Weathers';
import WeatherInfo from './WeatherInfo';


function Routers(){
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Weathers />} />
            <Route path="/:city" element={<WeatherInfo/>} />
        </Routes>
    </BrowserRouter>)
}

export default Routers;