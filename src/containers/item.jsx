import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import STATE from '../state'
import shopContext from '../context/context'
import '../components/css/item.css'



function Item() {
    const { addCart, setCart } = useContext(shopContext)

    const stateData = STATE.store_data
    const { slug } = useParams()
    const filter = stateData.filter(getId => getId.id === slug)
    const { name, price, img, decs, color, id } = filter[0]


    const addCartData = addCart.order



    const sendToCart = () => {
        setCart({
            type: 'ADD_TO_CART',
            payload: {
                name,
                price,
                img,
                color,
                id
            }
        })
    }

    const filterDisabled = addCartData.filter(stateId => stateId.id === id)
    // console.log(filterDisabled.length)

    return (
        <div className='item_comp_main_div'>
            <div>
                <img className='item_img' src={img} alt="" />
            </div>
            <div className='details_div'>
                <h2 className='name'> {name}</h2>
                <p className='price'>RS : {price}</p>
                <div className='description_div'>
                    <h4>Description :</h4>
                    <p className='description'>{decs}</p>
                </div>
                <button className={filterDisabled.length > 0 ? 'disabled ' : 'add_to_cart_btn'}
                    disabled={filterDisabled.length > 0} onClick={sendToCart} >ADD To CART</button>
            </div>

        </div>
    );
}

export default Item;