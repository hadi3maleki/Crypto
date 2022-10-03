
import React, { useEffect, useState } from 'react';

//FUNCTION
import { getCoin } from '../services/api';
import Coin from './Coin';

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
                        {coins.map(coin => <Coin 
                        key={coin.id} 
                        symbol = {coin.symbol}
                        name = {coin.name}
                        image = {coin.image}
                        price = {coin.current_price}
                        marketCap = {coin.market_cap}
                        priceChange = {coin.price_change_24h}


                        />
                        )}
                    </div> 

                    :

                    <Loader/>   
            } 
            
        </>
    );
};

export default Landing;