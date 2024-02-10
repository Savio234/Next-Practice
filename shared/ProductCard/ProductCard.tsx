import React, { useState } from 'react'
import { toast } from "react-toastify";
import styles from './ProductCard.module.css'

const ProductCard = ({data}: any) => {
    const [cart, setCart] = useState<any[]>([]); //bring from context
    const addToCart = () => {
        const productData = { ...data,  cartProductQuantity: 1 }
        
        setCart((prevCart: any[]) => {
            const itemIndex = prevCart.findIndex((item: any) => item.id === data.id)
            if (itemIndex !== -1) {
                toast.success(`One more ${productData.productName} has been added to cart`);
                return [
                    ...prevCart.slice(0, itemIndex),
                    {
                        ...prevCart[itemIndex],
                        cartProductQuantity: prevCart[itemIndex].cartProductQuantity + 1,
                    },
                    ...prevCart.slice(itemIndex)
                ]
            } else {
                toast.success(`${productData.productName} was added to cart`);
                return [...prevCart, productData]
            }
        })
        
    }
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard