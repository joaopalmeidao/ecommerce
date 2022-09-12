import React, { useContext, useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { TiDeleteOutline } from 'react-icons/ti'
import { toast } from 'react-hot-toast'

import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'


const Cart = () => {
  const cartRef = useRef()
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext()

  return (
    <div className='cart-wrapper' ref={{ cartRef }}>
      <div className="cart-container">
        <button type="button" className="cart-heading" onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <FiShoppingCart size={150} />
            <h3>Your Shopping Bag is Empty</h3>
            <Link href='/'>
              <button type="button" className="btn"
                onClick={() => setShowCart(false)}>
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className='product' key={item._id}>
              <img src={urlFor(item?.image[0])} className='cart-product-image' />
              <div className='item-desc'>
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>R${item.price.toFixed(2)}</h4>
                </div>
                <div className='flex-bottom'>
                  <div>
                    <button type='button' className='remove-item' onClick={() => onRemove(item)}>
                      <TiDeleteOutline />
                    </button>
                    <p className='quantity-desc'>
                      <span className='minus'
                        onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                        <AiOutlineMinus />
                      </span>
                      <span className='num' onClick=''>{item.quantity}</span>
                      <span className='plus'
                        onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                        <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>R$ {totalPrice.toFixed(2)}</h3>
            </div>
            <div className='btn-container'>
              <button type='button' className='btn'
                onClick='#TODO'>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Cart