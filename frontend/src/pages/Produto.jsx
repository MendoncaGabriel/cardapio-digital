import { useParams} from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import {ProdutoContext} from '../providers/Produto';

// Components
import Carousel from "../components/Carousel";
import Counter from "../components/Counter";

// Icons
import { IoIosArrowBack } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export default function Produto(){
    const [produtoFavorito, setProdutoFavorito] = useState(false);
    const [counter, setCounter] = useState([])
    
    const {id} = useParams();
    const {produtos} = useContext(ProdutoContext);
    const [produto, setProduto] = useState({});
   
    useEffect(()=>{
      let produto = produtos?.find(e => e.id == id)
      setProduto(produto)
      console.log(produtos)
    }, [produtos])

    const navigate = useNavigate();
    
    const BackButton = () => {
      navigate(-1)
    };

    const handleToggleFavorite = () => {
      setProdutoFavorito(prev => {
        const newFavorito = !prev;
        console.log(`fazendo requisição para ${newFavorito ? 'favoritar' : 'desfavoritar'} item, id: ${id}`);
        return newFavorito;
      });
    };

    return (
      
        <section className="flex flex-col h-screen w-full bg-orange-500 m-auto max-w-sm">
          <div className="flex items-center justify-between p-4 ">
            <IoIosArrowBack onClick={BackButton} className="text-2xl text-gray-100 hover:text-gray-500" />
            <h2  className="text-white font-bold text-2xl">LOGO DA EMPRESA</h2>
            <FaShoppingCart className="text-2xl text-gray-100 hover:text-gray-500" />
          </div>
        
            {produto && <Carousel imagens={[{img: produto.imagem}, {img: produto.imagem}, {img: produto.imagem}]} />
}
          <div className="flex-1 bg-gray-100 rounded-tl-xl rounded-tr-xl p-4  overflow-y-auto flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-2xl">{produto?.titulo }</h1>

              <button onClick={handleToggleFavorite}>
                <FaHeart className={`z-50 text-2xl ${produtoFavorito ? 'text-red-500' : 'text-gray-600'}`} />
              </button>
            </div>

            <p className="text-gray-500">{produto?.descricao}</p>

            <div className="flex items-center justify-between">
              <Counter setCounter={setCounter} />
              <div className=" font-semibold text-orange-500 text-2xl">
                <span>R$</span>
                <span>{(Number(produto?.preco * counter).toFixed(2)).toString().replace('.', ',')}</span>
              </div>
            </div>

            <button className="rounded-full p-2 text-white font-semibold text-xl bg-orange-500 w-full">COMPRAR AGORA</button>
          </div>
        </section>
      );
      
}