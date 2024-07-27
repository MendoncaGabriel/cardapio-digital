import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

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



export default function Card({ favorito, setFavorito, imagem, estrelas, titulo, descricaoReduzida, preco, precoAntigo, bandeira}){
    const navigate = useNavigate()
    
    const handleToggleFavorite = () => {
        setFavorito(!favorito)
    }
    
    return(
        <div className="w-40 aspect-[3/4] bg-gray-800 rounded-sm overflow-hidden shadow-sm relative">
            <img 
                src={imagem} 
                alt={"imagem do produto " + titulo && titulo}
                className="w-full aspect-video object-cover "
            />

            {
                bandeira && (
                    <div className='absolute top-1 drop-shadow-lg right-1 font-semibold  text-gray-100 px-2 py-1 rounded-md bg-orange-500'>
                        <p className='drop-shadow-xl text-xs'>{bandeira}</p>
                    </div>
                )
            }
            
            <div className="flex flex-col justify-between p-2 pt-0  flex-grow  h-[calc(100%-90px)]"> {/* preencher altura toral sem sair do component*/}
                <p className="font-semibold text-gray-200 text-sm ">
                    {titulo}
                </p>
                {
                    descricaoReduzida && (
                        <p className="text-sm leading-4  text-gray-500">
                            {truncateText(descricaoReduzida, 38)}
                        </p>
                    )
                }

                <div className=" flex items-center justify-start space-x-1 ">
                    <RatingStars rating={estrelas}  />
                </div>
                 
                <button onClick={handleToggleFavorite}>
                    <FaHeart className={`absolute bottom-3 right-4 text-2xl ${favorito ? 'text-red-500' : 'text-gray-600'}`} />
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

        </div>
    )
}