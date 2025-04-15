import React, { use, useState } from 'react';
import Countrie from './countrie';
import './country.css'
const Countries = ({CountriesPromise}) => {
    const countrie = use(CountriesPromise);

    const [vistiedCountry,setVisitedCountry] = useState([])

    const handleVisitedCountry =(Country) =>{
        console.log('country i visit to be added',Country.name.common);

        const newVisitedCountry = [...vistiedCountry,Country]
            
        setVisitedCountry(newVisitedCountry)
    }

    
    return (
        <div>
            <h1>Traveling Country :{countrie.length}</h1>
            <h3>Traveled So far: {vistiedCountry.length} </h3>

            <ol>
                {
                    vistiedCountry.map(Country => (
                        <li key={Country.cca3}>
                            {Country.name.common} <br />
                            <img height={'130px'} width={'200px'} src={Country.flags?.png} alt="" />
                        </li>
                    ))
                }
            </ol>

        <div className='gridCountry'>
            {
                countrie.map(Country => <Countrie key={Country.cca3} handleVisitedCountry={handleVisitedCountry} Country={Country}></Countrie>)
            }
            </div>
        </div>
    );
};

export default Countries;