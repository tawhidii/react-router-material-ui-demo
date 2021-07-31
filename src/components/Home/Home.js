import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'
const Home = () => {
    const [country,setCountry]  = useState([])

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response=>response.json())
        .then(data=>setCountry(data))
    },[])
    return (
        <div className="home-card">
            {
                country.map((cntry,idx)=><Country country={cntry} key={idx}></Country>)
            }
        </div>
    );
};



export default Home;