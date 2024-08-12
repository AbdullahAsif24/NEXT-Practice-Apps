import { useEffect, useState } from "react";
import { productItemType } from "./productItemType";
import Product from "./products";

type AllProductsFuncType = {
    productsList: productItemType[];
    selectedCateg: string;
}

export default function AllProductsFunc({productsList, selectedCateg}:AllProductsFuncType) {
    let filteredProducts = selectedCateg === 'All'? productsList: productsList.filter(product => product.category === selectedCateg);

    return (
        <>
            <table className="ml-2">
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black' }}>serial Number</th>
                        <th style={{ border: '1px solid black' }}>Name</th>
                        <th style={{ border: '1px solid black' }}>Price</th>
                        <th style={{ border: '1px solid black' }}>Category</th>
                    </tr>
                </thead>

                {filteredProducts.map(product => (
                    <Product 
                        key={product.name + product.serialNum} 
                        serialNum={product.serialNum} 
                        name={product.name} 
                        price={product.price} 
                        category={product.category} 
                    />
                ))}

            </table>
        </>
    )
}