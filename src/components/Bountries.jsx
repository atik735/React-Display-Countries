import React, { use, useState } from 'react';
import Bountry from './bountry';
import './bountry.css'
const Bountries = ({KountriesPromise}) => {
    const kountries = use(KountriesPromise);
    

    const [visitedKountry,setVisitedKountry] =useState([])

    const handleVisitedKountry = (kountry) =>{
        console.log('i visited',kountry.name.common);

        const newVisitedKountry = [...visitedKountry,kountry]
        setVisitedKountry(newVisitedKountry)
    }


    const [flags,setFlags] =useState([])

    const handleFlags = (flag) =>{

        const newflag = [...flags,flag]
        setFlags(newflag)        
    }

    return (
        <div>
            <h1>Traveling Countries</h1>
            <h2>Traveled so Far:{visitedKountry.length}</h2>

                <div className='visited-flags'>

                    {flags.map( (flag,i) => <img key={i} src={flag}></img>)}
                </div>
                
            <ol>
                {
                    visitedKountry.map(kountry => <li key={kountry.cca3}>{kountry.name.common}
                    <br />
                    <div className='visited-flags'>
                    <img src={kountry.flags?.png} alt="" />
                    </div>
                    </li>)
                }
            </ol>

        <div className='bountrygrid'>
            {
                kountries.map( kountry => <Bountry key={kountry.cca3} handleFlags={handleFlags} handleVisitedKountry={handleVisitedKountry} kountry={kountry}></Bountry>)
            }
            </div>
        </div>
    );
};

export default Bountries;