import { createContext, useState } from "react";

export const Context = createContext()


export const ProductsContext = ({children}) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || [])

    const saveProduct = (data) => setProducts([...products, data])


    localStorage.setItem("products", JSON.stringify(products))

    return (
        <Context.Provider value={{products, saveProduct}}>
            {children}
        </Context.Provider>
    )
}