import React from 'react';

const Coin = ({name, symbol, price, image, marketCap, priceChange}) => {
    return (
        <div>
            <img src = {image} alt = {name}/>
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>{price.toLocaleString()}</span>
            <span>{priceChange.toLocaleString()}</span>
            <span>{marketCap}</span>
        </div>
    );
};

export default Coin;