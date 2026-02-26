export const CART_KEY = 'cart'
export const CART_UPDATED_EVENT = 'cart-updated'

export const getCartItems = () => {
  try {
    const raw = localStorage.getItem(CART_KEY)
    if (!raw) return []

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch (error) {
    console.error('Error parsing cart from storage:', error)
    return []
  }
}

export const getCartCount = () => {
  const items = getCartItems()
  return items.reduce((total, item) => total + (item.quantity || 1), 0)
}

export const setCartItems = (items) => {
  localStorage.setItem(CART_KEY, JSON.stringify(items))
  window.dispatchEvent(new Event(CART_UPDATED_EVENT))
}

export const clearCartItems = () => {
  localStorage.removeItem(CART_KEY)
  window.dispatchEvent(new Event(CART_UPDATED_EVENT))
}
