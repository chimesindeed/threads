
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem)=>{return cartItem.id===cartItemToAdd.id});

  if(existingCartItem){
    return cartItems.map(
      (cartItem)=>{ return (
        cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
      )
    })
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem)=>{return cartItem.id===cartItemToRemove.id});


  if(existingCartItem.quantity >= 2){
    return cartItems.map(
      (cartItem)=>{ return (
        cartItem.id === cartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    })
  }
  return cartItems = cartItems.filter(item=>{ return item.id != cartItemToRemove.id})
}
