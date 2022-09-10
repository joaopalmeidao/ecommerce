import React from 'react'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>JP Bikes</Link>
      </p>
      <button type='button' className='cart-icon' onClick=''>
      <FiShoppingCart />
      <span className='cart-item-qty'>#TODO:qunatity</span>
      </button>
    </div>
  )
}

export default Navbar