import database from "../database"
import { useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Carousel from "../components/Carousel";
import { FaShoppingCart } from "react-icons/fa";

export default function Produto(){
    const {id} = useParams();
    const [produto, setProduto] = useState([])

    useEffect(()=>{
        let prod = database.find(e => e.id == id)
        setProduto(prod)
    }, [])


    return (
        <section className="flex flex-col h-screen w-full border border-red-500">
          <div className="flex items-center justify-between p-4">
            <IoIosArrowBack className="text-2xl text-gray-100 hover:text-orange-500" />
            <FaShoppingCart className="text-2xl text-gray-100 hover:text-orange-500" />
          </div>
        
     
          <Carousel imagens={[{img: produto.imagem}, {img: produto.imagem}, {img: produto.imagem}]} />

          <div className="flex-1 bg-gray-100 rounded-tl-xl rounded-tr-xl p-4 overflow-y-auto pt-10">
            <h1>{produto.titulo}</h1>
          </div>
        </section>
      );
      
}