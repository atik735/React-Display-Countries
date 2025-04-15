import React, { useState } from 'react';
import './bountry.css'
const  Bountry = ({kountry,handleVisitedKountry,handleFlags}) => {

const [visited,setVisited] =useState(false);

const handleVisited =() =>{

        // if (visited) {
        //     setVisited(false)
        // } else {
        //     setVisited(true)
        // }

        setVisited(!visited);
        handleVisitedKountry(kountry);
}

    return (
        <div className={`bountry ${visited && 'bountryCls'}`}>
            <h3>Country Name:{kountry.name?.common}</h3>
            <img width={'150px'} height={'100px'} src={kountry.flags?.png} alt="" />
            <h4>Independent:{kountry.independent? 'free':'Not free'}</h4>
            <button onClick={handleVisited}>{visited?'visited':"Not Visited"}</button>
            <button onClick={() => handleFlags(kountry.flags?.png)}>Add Flags</button>
        </div>
    );
};

export default Bountry;