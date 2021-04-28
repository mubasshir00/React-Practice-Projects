import React, { useState } from 'react'

const Country = ({id,name,img,info}) => {
    const [details, setDetails] = useState(false)
    
    return (
        <div className="content">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p id="first" class="buttonBox">
                {details?info:`${info.substring(0,0)}`}
                <button onClick={()=>setDetails(!details)}>
                    {details?'Show Less' : 'Details'}
                </button>
            </p>
          
        </div>
    )
}

export default Country
