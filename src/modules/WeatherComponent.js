import React from 'react'
import styled from 'styled-components'



const WeatherCondition = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:100%;
justify-content:space-between;
margin:30px auto;
`

const Condition = styled.span`
margin-top -10px;
font-size:14px;
& span {
  font-size:28px;
}
`
const Weatherlogo = styled.img`
width:100px;
height:100px;
margin:5px auto;
`
const Location = styled.span`

font-size:28px;
font-weight:bold;
`
const WeatherInfoLabel = styled.span`
margin-bottom: 6px;
    margin-left: -203px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 24px;
`
const WeatherInfoContainer = styled.div`
display:felx;
width:90%;
flex-direction:row;
justify-content: space-evenly;
align-items:center;
flex-wrap: wrap;

`
const InfoContainer = styled.div`
display:felx;
margin:5px 10px;
flex-direction:row;
justify-content: space-evenly;
align-items:center;

`
const InfoIcon = styled.img`
width:36px;
height:36px;

`

const InfoLabel = styled.span`
display: flex;
flex-direction: column;
font-size:14px;
margin:15px;
& span {
  font-size: 12px;
  text-transform: captialize;
}


`

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg"



};
export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudyyyy.png",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "50d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "010d": "/icons/rain.svg",
  "010n": "/icons/rain-night.svg",
  "011d": "/icons/storm.svg",
  "011n": "/icons/storm.svg",




};


const WeatherInfoComponent = (props) => {
  const { name, value } = props;


  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />

      <span>{value}</span>
      <span>{name}</span>
      <InfoLabel>


      </InfoLabel>



    </InfoContainer>


  )


}




const WeatherComponent = ({ weather }) => {





  return (
    <>

      <WeatherCondition></WeatherCondition>
      <Condition><span>{`${Math.floor(weather?.temperature - 273)}°C`}</span></Condition>
      <Weatherlogo src={WeatherIcons[weather?.icon]} />
      <Location>{weather?.city_name}</Location>

      <WeatherInfoLabel>Weatherinfo</WeatherInfoLabel>
      <WeatherInfoContainer>
        {/* <WeatherInfoComponent name="Max-Temp" value={`${Math.floor(weather?.main?.temp_max - 273)}°C`} /> */}

        <WeatherInfoComponent name="humidity" value={weather?.humidity} />
        <WeatherInfoComponent name="wind" value={weather?.wind_speed} />
        {/* <WeatherInfoComponent name="pressure" value={weather?.pressure} /> */}
      </WeatherInfoContainer>

    </>

  )
}

export default WeatherComponent
