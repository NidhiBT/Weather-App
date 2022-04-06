import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherComponent";
import axios from "axios";
import Errpage from "./modules/Errpage";

const Api_Key = "d1858caaa59ffc5a0e21346cb0ceec42";

const Container = styled.div`
display: flex;
flex-direction: column;
margin:auto;
align-items:center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius:4px
background-color: white;
width:380px;
font-family:Montserrat;
margin-top:105px;
`;

const AppLabel = styled.span`
  color: black;
  font-size: 26px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, UpdateWeather] = useState();
  const [isInvalidCity, setIsInvalidCity] = useState(false);

  const fetchWeather = async (e) => {
    e.preventDefault();
    let ress = {
      "cityName": city,
      "apiKey": Api_Key
    }
    const response = await axios
      .post(
        "http://localhost:3000/api/getLocation",
        ress
      )
      .catch(() => setIsInvalidCity(true));
    console.log(response)
    if (response.data.response == "FAILURE") {
      setIsInvalidCity(true)
    }
    UpdateWeather(response.data.data);
  };

  //console.log(weather)
  return (
    <Container>
      <AppLabel>Weather Application</AppLabel>
      {weather ? (
        <WeatherComponent weather={weather} />
      ) : isInvalidCity ? (
        <Errpage />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;