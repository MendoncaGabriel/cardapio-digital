import Card from "../components/Card";

export default function GridCards({produtos}){

    return(
        <section className="p-5 grid grid-cols-2 gap-4">
            {
                produtos.map((item, index) => 
                <Card 
                    key={index}
                    id={item.id}
                    imagem={item.imagem}
                    favorito={item.favorito} 
                    estrelas={item.estrelas} 
                    titulo={item.titulo}
                    descricao={item.descricao}
                    preco={item.preco}
                    precoAntigo={item.precoAntigo}
                    bandeira={item.bandeira}
                />
            )}
        </section>
    )
}