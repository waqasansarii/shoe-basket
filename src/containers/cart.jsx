import React, { useContext } from 'react'
import shopContext from '../context/context'
import Summary from '../components/summery'
import '../components/css/cart.css'


function Cart() {
    const { addCart,setCart } = useContext(shopContext)
    const getData = addCart.order

    const handleClose = (id) => {
        // console.log(e)
        setCart({
            type:'Remove',
            payload:{
                sentId: id
            }
        })
    }

    return (
        <div className='container'>
            {getData.length < 1 || getData === undefined ?
                <div>
                    <div className='cart_empty_div'>
                        <h1 className='cart_empty_head'>Cart Is Empty</h1>

                    </div>
                </div>
                :
                <div className='main_cart_div'>
                    <div className='main_detail_div'>

                        {getData.map((value, index) => {
                            return (
                                <div key={index} className='sub_detail_div'>

                                    <div  className='detail_div'>
                                        <div>
                                            <img className='cart_img' src={value.img} alt="" />

                                        </div>
                                        <div>
                                            <h5 className='product_name'>{value.name}</h5>
                                            <p className='color'>color : {value.color}</p>

                                        </div>
                                        <div >
                                            <p className='product_price'>RS : {value.price}</p>

                                        </div>

                                    </div>
                                    <div className='close_btn_div'>
                                        <p onClick={() => handleClose(value.id)}>&times;</p>
                                    </div>


                                </div>
                            )
                        })}
                    </div>
                    <div className='summery_div'>
                        {/* <h3>Summery</h3> */}
                        <Summary />
                    </div>
                </div>
            }
        </div>
    )
}
export default Cart