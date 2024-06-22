import { useEffect, useState } from "react";
import Country from "../country/Country";
import'./countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div >
            <h3>Countries: {countries.length}</h3>
           <div className="countries_container">
           {
                countries.map(country => 
                    <Country key={country.cca3} country={country}></Country>  
                )
            }
           </div>
        </div>
    );
};

export default Countries;
