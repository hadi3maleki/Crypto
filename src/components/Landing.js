
import React, { useEffect, useState } from 'react';

//FUNCTION
import { getCoin } from '../services/api';

//COMPONENTS
import Loader from './Loader';

const Landing = () => {

    const [coins, setCoins] = useState([]);

    useEffect(()=>{
        const fetchAPI = async () => {
            const data = await getCoin();
            // console.log(data);
            setCoins(data)
        }
        fetchAPI();
    },[])

    return (
        <>
            <input type= 'text' placeholder='Search' />
            {
                coins.length ?
                
                    <div>
                        {coins.map(coin => <p key={coin.id}>{coin.name}</p>)}
                    </div> 

                    :

                    <Loader/>   
            } 
            
        </>
    );
};

export default Landing;