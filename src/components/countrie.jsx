import React, { useState } from 'react';
import './country.css'

const countrie = ({Country,handleVisitedCountry}) => {  
    const [visited,setVisited] = useState(false)    

    const displayCountry ={...Country}

    if (Country.name.common==="Israel") {
        displayCountry.name.common="gu Toilet"
    }
    
    const handleVisit=() =>{

        // if (visited) {
        //     setVisited(false)
        // } else {
        //     setVisited(true)
        // }

        setVisited(!visited);
        handleVisitedCountry(Country)
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h4>Country name:{Country.name.common}</h4>
                <img height={'130px'} width={'200px'} src={Country.flags?.png} alt="" />
            <h4>Population:{Country.population}</h4>
            <h4>Region:{Country.region}</h4>
            <h4>Start OF week:{Country.startOfWeek}</h4>
            <h4>Independent :{Country.independent?"Country is free":"Not free"}</h4>

                <button className={visited?'btn-visit':'btn-notVisit'} onClick={handleVisit}>{visited?"Visited":"Not Visited"}</button>
        </div>
    );
};

export default countrie;