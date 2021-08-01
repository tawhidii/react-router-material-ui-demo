import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} = useParams()
    const [country,setCountryDetails] = useState({})
    useEffect(()=>{
        let url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>setCountryDetails(data[0]))
    },[])
    const {name,population,region,subregion,alpha2Code} = country
    return (
        <div>
            <h1>Contry Details </h1>
            <h2>Name : {name}</h2>
            <h2>Population : {population}</h2>
            <h2>Region : {region}</h2>
            <h2>Sub Region: {subregion}</h2>
            <h2>alpha2Code : {alpha2Code}</h2>
        </div>
    );
};

export default CountryDetails;