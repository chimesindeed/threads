import React from 'react'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
        <span className='name'>{name}</span>
        <div className='quantity-grouping'>
          <div className='arrow remove-item-button' onClick = {()=>{removeItem(cartItem)}}>&#10094;</div>
          <div className='quantity'>{quantity}</div>
          <div className='arrow add-item-button' onClick = {()=>{addItem(cartItem)}}>&#10095;</div>
        </div>
        <span className='price'>{price}</span>
      <div className='remove-button' onClick={()=>{clearItem(cartItem)}}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addItem: item => { return dispatch(addItem(item))},
    removeItem: item => {return dispatch(removeItem(item))},
    clearItem: item => { return dispatch(clearItemFromCart(item))}
  })
}
export default connect(null, mapDispatchToProps)(CheckoutItem)
