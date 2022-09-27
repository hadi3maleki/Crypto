
import React, { useEffect } from 'react';

//FUNCTION
import { getCoin } from '../services/api';

const Landing = () => {

    useEffect(()=>{
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data);
        }
        fetchAPI();
    },[])

    return (
        <div>
            Landing
        </div>
    );
};

export default Landing;