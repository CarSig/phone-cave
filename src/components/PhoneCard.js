import React from 'react'

import { useParams, Link } from 'react-router-dom'



const PhoneCard = ({ phone, selectedPhone, setSelectedPhone }) => {

    const selectPhone = () => {

        setSelectedPhone(phone.id)
        console.log(phone.id)
    }


    return (
        <div className='list-item'>

            <h3>{phone.name}</h3>

            <img src={require(`../../public/images/${phone.imageFileName}`)} alt={phone.name} />





            <button onClick={selectPhone}>Select</button>

        </div>
    )
}

export default PhoneCard