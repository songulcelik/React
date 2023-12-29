import React, { useState } from 'react';
const API_BASE_URL="https://restcountries.com/v3.1";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const loadData = async() => {
      const resp= await axios(`${API_BASE_URL}/all`);
      const data= resp.data;
      
    }
    




  return (
    <div>Countries</div>
  )
}

export default Countries;