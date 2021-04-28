import React from 'react'
import Country from './Country'

const Countries = ({ Countryname, removeCity}) => {
    return (
        <div className="content-wrapper">
            {
                Countryname.map((country)=>{
                    return <Country key={country.id} {...country} />
                })
            }
        </div>
    )
}

export default Countries
