import { getByPlaceholderText } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'
import { WeatherIcons } from './WeatherComponent'

const Errpage = () => {

    return (
        <>

            <br />
            <br />
            <h3>
                Invalid City Or ZipCode
            </h3>




            <span>
                <img src="/icons/notfound.png" />
            </span>

        </>


    )

}


export default Errpage;