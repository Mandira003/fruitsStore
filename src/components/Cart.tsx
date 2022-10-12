import React, { useState } from "react";
import { fruitsChart } from "../utils/data";
import { getPrice } from "../utils/getPrice";

const Cart = () => {
    const [fruitsState, setFruitsState] = useState<{[key: string]: number}>({});
    const [checkoutPrice, setCheckoutPrice] = useState(0);

    const onFruitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFruitsState((fState) => ({...fState, [e.target.name]: parseInt(e.target.value)}))
    }

    const onCheckOut = (e: { preventDefault: () => void; }) => {
        e?.preventDefault();
        const fruitsArray: (string|number)[][] = [];
        Object.keys(fruitsState).forEach(key => {
            fruitsArray.push([key, fruitsState[key]])
        });
        setCheckoutPrice(getPrice(fruitsArray));
    }
    return (
        <div style={{display: "flex", flexDirection: 'column'}}>             
            <form onSubmit={onCheckOut}>
                <div style={{display: "flex", flexDirection: 'column'}}> 
                    {
                        Object.keys(fruitsChart).map(fruit => (
                            <div style={{display: "flex", alignItems: 'center'}} key={fruit}>
                                <label>
                                    {`${fruit.toUpperCase()}: `}
                                    <input type={"text"} name={fruit} onChange={onFruitsChange} />
                                </label> 
                                <h3 style={{marginLeft: 12}}>{`Price: ${fruitsChart[fruit].pricePerUnit}$`}</h3>
                            </div>
                        ))
                    }
                </div>   
                <input type={"submit"} value="Checkout"/>
            </form>
            <div>
                <h3>{`Checkout value: ${checkoutPrice}`}</h3>
            </div>
        </div>
    )
}
export default Cart;