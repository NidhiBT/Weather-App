import React from 'react'
import styled from 'styled-components'

const Weatherlogo = styled.img`
width:140px;
height 130px;
`

const ChooseCityLabel = styled.span`
color:black;
font-size:16px;
font-weight:bold;
margin:10px auto;
`


const SearchBox = styled.form`
display:flex;
felx-direction:row;
border: 1px solid black;
border-radius: 2px;
color: black;
font-size:15px;
font-weight:bold;
margin:10px auto;

& input {
    padding:8px;
    font-size:14px;
    border:none;
    outline:none;
}

& button {
    cursor:pointer;
    color:white;
    background-color:black;
    padding:8px;
    font-size:14px;
    border:none;
    outline:none;
}

`;



const CityComponents = (props) => {
    const { updateCity, fetchWeather } = props;



    return (
        <>
            <Weatherlogo src="icons/perfect-day.svg" />
            <ChooseCityLabel>Find Weather Of Your City Now</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input placeholder="CityName/ZipCode" onChange={(e) => updateCity(e.target.value)} />
                <button type="submit">Search</button>

            </SearchBox >


        </>
    );
};

export default CityComponents
