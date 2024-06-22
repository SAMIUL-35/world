
import { useState } from 'react';
import './country.css';
const Country = ({country}) => {
    const [visit,setvist]=useState(false);
    const handleClick=()=>
        {

setvist(!visit);
        }
    return (
        <div className='country'>
            <h4>Name:{country.name.common}</h4>
            <img src={country.flags.png} alt="" />
       <p>population:{country.population}</p>
       <p>area:{country.area}</p>
       <button className='button' onClick={handleClick}>Button</button>
       {
        visit?'i am going ':'want to go'
       }
        </div>
    );
};

export default Country;
