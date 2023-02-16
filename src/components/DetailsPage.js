import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DetailsPage = ({ phoneDetails, clearSelectedPhone }) => {


    return (
        <div className='details'>

            <h1>{phoneDetails.name}</h1>
            <div className="details-list">
                <img className="img-details" src={require(`../../public/images/${phoneDetails.imageFileName}`)} alt={phoneDetails.name} />
                <div>
                    <h3>manufacturer: {phoneDetails.manufacturer}</h3>
                    <h4>color: {phoneDetails.color}</h4>
                    <h4>price: {phoneDetails.price}</h4>
                    <h4>screen: {phoneDetails.screen}</h4>
                    <p>{phoneDetails.description}</p>
                    <button onClick={clearSelectedPhone}>Close</button>
                </div>
            </div>

        </div>
    )
}

export default DetailsPage