import React from 'react'
import Tour from './Tour'

const Tours = ({ removeTour, tours}) => {
    return (
        <div>
            {
                tours.map((tour)=>{
                    return(
                        <Tour removeTour={removeTour} key={tour.id} {...tour} />
                    )
                })
            }
        </div>
    )
}

export default Tours
