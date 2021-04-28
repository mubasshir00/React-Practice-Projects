import React, { useState } from 'react'

const Tour = ({removeTour,id,name,info,image}) => {
    const [readMore, setReadMore] = useState(false)
    
    return (
        <div>
            <div>
                <img src={image} alt="" />
                <h2>{name}</h2>
            </div>
            <p>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    {readMore?'show less':'read more'}
                </button>
            </p>
            <button onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    )
}

export default Tour
