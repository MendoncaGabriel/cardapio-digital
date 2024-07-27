import Card from "../components/Card";
import { useEffect, useState } from "react";
export default function GridCards(){
    const [produtos, setProdutos] = useState([])

    useEffect(()=>{
        fetch("/api/produtos")
        .then(res => res.json())
        .then(res => setProdutos(res))
    }, [])

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