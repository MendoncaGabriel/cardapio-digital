import Card from "../components/Card";
import database from '../database.js'

export default function GridCards(){


    const handleFavorite = (id) => {


    }

    return(
        <section className="p-5 grid grid-cols-2 gap-4">
            {
                database.map((item, index) => 
                <Card 
                    key={index}
                    id={item.id}
                    imagem={item.imagem}
                    favorito={item.favorito} 
                    estrelas={item.estrelas} 
                    titulo={item.titulo}
                    descricaoReduzida={item.descricaoReduzida}
                    preco={item.preco}
                    precoAntigo={item.precoAntigo}
                    bandeira={item.bandeira}
                />
            )}
        </section>
    )
}