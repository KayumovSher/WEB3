import React, { useEffect } from "react";
import { useState } from "react";
import './Body.css'



export default function Body() {
    const [isLoading, setIsloading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([]);

    const fetchProducts = async() =>{
        try {
            setIsloading(true);
            setIsError(false);

            const resPro = await fetch(
                `https://dummyjson.com/products?limit=20&skip=10`
            );

            const res = await resPro.json()

            console.log(res);

        } catch (err) {
            setIsError(true);
        } finally {
            setIsloading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
  }