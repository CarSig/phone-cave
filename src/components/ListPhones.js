import React, { useEffect, useState } from 'react'
import "../App.css"
import PhoneCard from './PhoneCard.js'

import axios from 'axios'
import DetailsPage from './DetailsPage'

const ListPhones = () => {

    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedPhone, setSelectedPhone] = useState(null)
    const [phoneDetails, setPhoneDetails] = useState(null)


    const clearSelectedPhone = () => {
        setLoading(true)
        setPhoneDetails(null)
        setSelectedPhone(null)
        setLoading(false)
    }

    useEffect(() => {
        axios.get('http://localhost:5005/api/phones')
            .then((response) => {
                setPhones(response.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])



    useEffect(() => {
        // const details = phones.find(phone => phone.id == selectedPhone)
        // setPhoneDetails(details)
        if (selectedPhone !== null) {
            axios.get(`http://localhost:5005/api/phones/${selectedPhone}`)
                .then((response) => {
                    setPhoneDetails(response.data[0])
                    setLoading(false)
                }
                )
                .catch((err) => {
                    console.log(err)
                }
                )
        }



    }, [selectedPhone])



    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='list-container'>

            {phoneDetails && <DetailsPage clearSelectedPhone={clearSelectedPhone} phoneDetails={phoneDetails}></DetailsPage>}
            <div className="list">
                {phones.map((phone) => (


                    <PhoneCard phone={phone} key={phone.id} selectedPhone={selectedPhone} setSelectedPhone={setSelectedPhone} />



                ))}
            </div>


        </div >
    )
}

export default ListPhones