import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from 'react';

const RatingStars = ({ rating }) => {
    const clampedRating = Math.max(0, Math.min(5, rating));

    return (
        <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
                <FaStar
                    key={index}
                    className={`text-lg ${index < clampedRating ? 'text-yellow-400' : 'text-gray-400'}`}
                />
            ))}
        </div>
    );
};

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};



export default function Card({ id, favorito, imagem, estrelas, titulo, descricao, preco, precoAntigo, bandeira }) {
    const navigate = useNavigate()

    const [Favorito, setFavorito] = useState(favorito);


    const handleToggleFavorite = (event) => {
        event.stopPropagation();
        setFavorito(prev => {
            const newFavorito = !prev;
            console.log(`fazendo requisição para ${newFavorito ? 'favoritar' : 'desfavoritar'} item, id: ${id}`);
            return newFavorito;
        });
    };

    const handleNavigate = () => {
        navigate(`/produto/id/${id}`)
    }


    return (
        <button onClick={handleNavigate} className="w-40 aspect-[3/4] bg-gray-800 rounded-sm overflow-hidden shadow-sm relative z-0">
            <img
                src={imagem}
                alt={`imagem do produto ${titulo || 'sem título'}`}
                className="w-full aspect-video object-cover "
            />

            {
                bandeira && (
                    <div className='absolute top-1 drop-shadow-lg right-1 font-semibold  text-gray-100 px-2 py-1 rounded-md bg-orange-500'>
                        <p className='drop-shadow-xl text-xs'>{bandeira}</p>
                    </div>
                )
            }
        
            <div className="flex flex-col justify-between p-2 pt-1  flex-grow  h-[calc(100%-90px)]"> {/* preencher altura toral sem sair do component*/}
                
                    <p className="font-semibold text-left text-gray-200 text-sm ">
                        {titulo}
                    </p>
                    {
                        descricao && (
                            <p className="text-sm leading-4 text-left  text-gray-500">
                                {truncateText(descricao, 38)}
                            </p>
                        )
                    }

                    <div className=" flex items-center justify-start space-x-1 ">
                        <RatingStars rating={estrelas} />
                    </div>
            

                    <button onClick={handleToggleFavorite}>
                        <FaHeart className={`z-50 absolute bottom-3 right-4 text-2xl ${Favorito ? 'text-red-500' : 'text-gray-600'}`} />
                    </button>
                
                    {
                        precoAntigo ? (
                            <p className="text-orange-500  text-base font-semibold  w-full  flex items-center justify-start">
                                <span className="text-xs line-through mr-1 text-gray-500">R${precoAntigo?.toString()?.replace('.', ',')}</span>
                                <div className='flex items-start'>
                                    <span className="text-xs ">R$</span>
                                    <span>{preco?.toString()?.replace('.', ',')}</span>
                                </div>
                            </p>
                        ) : (
                            <p className="text-orange-500  text-xl font-semibold  w-full  flex items-start justify-start">
                                <span className="text-xs">R$</span>
                                <span>{preco?.toString()?.replace('.', ',')}</span>
                            </p>
                        )
                    }
                


            </div>
        </button>
    )
}