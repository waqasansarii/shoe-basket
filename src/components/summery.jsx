import React, { useContext } from 'react'
import shopContext from "../context/context";


function Summary() {

    const { addCart } = useContext(shopContext)
    const forPrice = addCart.order
    const map = forPrice.map(value => {
        return value.price
    })
    // console.log(map)
    const tax = 0;
    const sum = map.reduce((a, b) => { return a + b }, 0)
    // console.log(sum)




    return (
        <div className='container_div'>
            <div className='summary_div'>
                <h1>Summary</h1>
            </div>
            <div className='subtotal_div'>
                <h5>SubTotal</h5>
                <h6>{sum}</h6>
            </div>
            <div className='tax_div'>
                <h5>tax</h5>
                <h6>{tax}</h6>
            </div>
            <hr />
            <div className='total_div'>
                <h4>Total</h4>
                <h5>{sum + tax}</h5>
            </div>
        </div>
    )
}

export default Summary