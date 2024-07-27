// providers/Produto.jsx
import React from "react";
import {useState, useEffect} from 'react'

export const ProdutoContext = React.createContext({ produtos: []});

export const ProdutoProvider = ({children}) => {
  const apiUrl = import.meta.env.VITE_API_URL || "/";

  const [produtos, setProdutos] = useState([])

  useEffect(()=>{
      fetch(`${apiUrl}/api/produtos`)
      .then(res => res.json())
      .then(res => {
        setProdutos(res)
      })
  }, [])

  return (
    <ProdutoContext.Provider value={{ produtos }}>
      {children}
    </ProdutoContext.Provider>
  );
};
