import React from "react";

const Price = (props) => {

    const symbol = props.match.params.symbol
    
    //state to hold the stock data
    const [stock, setStock] = React.useState("null")

    // function to fetch stock data
    const getStock = async () => {
        const response = await fetch(// stock price somehow)
        const data = await response.json()
        setStock(data)
    }

    React.useEffect(() => {
        getStock()
    }, [])

    const loaded = () => {
        return (
            <div>
                <h1>
                    {stock.asset_id_base}/{stock.asset_id_quote}
                </h1>
                <h2>{stock.rate}</h2>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return stock ? loaded() : loading()

};

export default Price;