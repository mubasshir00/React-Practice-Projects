import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
const Questioncomp = ({ id, title, infotitle,info}) => {
    const [ShowInfo, setShowInfo] = useState(false)
    return (
        <>
            <div className="faqcontainer">
               <div className="questionwrapper">
                    <div className="questiontitle">
                        <p>{title}</p>
                        <button className="btn" onClick={() => setShowInfo(!ShowInfo)}>
                            {ShowInfo ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                    </div>
                    <div className="questioncontent">
                        {ShowInfo && <p>{infotitle}</p>}
                        {ShowInfo && <p>{info}</p>}
                    </div>
               </div>
            </div>
        </>
    )
}

export default Questioncomp
