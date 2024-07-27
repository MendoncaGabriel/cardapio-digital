import Card from "../components/Card";

const foodItems = [
    {
        imagem: "https://st2.depositphotos.com/1692343/5636/i/450/depositphotos_56360353-stock-photo-hot-homemade-pepperoni-pizza.jpg",
        favorito: false,
        estrelas: 4,
        titulo: "Pizza de Pepperoni",
        descricaoReduzida: "Deliciosa pizza de pepperoni com queijo derretido e molho caseiro.",
        preco: 49.99,
        bandeira: "Promoção!"
    },
    {
        imagem: "https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-gourmet.jpg",
        favorito: false,
        estrelas: 5,
        titulo: "Hambúrguer Gourmet",
        descricaoReduzida: "Hambúrguer suculento com carne premium, queijo cheddar e bacon crocante.",
        preco: 29.99,
        precoAntigo: 34.99,
        bandeira: "Desconto!"
    },
    {
        imagem: "https://www.djapa.com.br/wp-content/uploads/2024/03/comida-japonesa-para-iniciantes.jpg",
        favorito: false,
        estrelas: 3,
        titulo: "Sushi Variado",
        descricaoReduzida: "Seleção de sushis frescos com peixe de alta qualidade e arroz temperado.",
        preco: 89.99,
        precoAntigo: 99.99,
        bandeira: "Novo!"
    },
    {
        imagem: "https://receitasdeaz.com.br/wp-content/uploads/2024/02/tacos-mexicanos-tradicional.webp",
        favorito: false,
        estrelas: 4,
        titulo: "Tacos Mexicanos",
        descricaoReduzida: "Tacos recheados com carne temperada, guacamole e salsa fresca.",
        preco: 24.99,
        precoAntigo: 29.99,
        bandeira: "Promoção!"
    },
    {
        imagem: "https://assets.bonappetit.com/photos/656f48d75b552734225041ba/1:1/w_3129,h_3129,c_limit/20231120-WEB-Lasanga-6422.jpg",
        favorito: false,
        estrelas: 5,
        titulo: "Lasagna",
        descricaoReduzida: "Lasagna caseira com camadas de carne, molho de tomate e queijo gratinado.",
        preco: 54.99,
        precoAntigo: 64.99,
        bandeira: "Desconto!"
    },
    {
        imagem: "https://s2-receitas.glbimg.com/wFnnogxKgC7yGPUJjJFfo9W6HyI=/0x0:1280x923/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/u/A/MXu3TxQzARBzm1dmUBIQ/salada-caesar.jpeg",
        favorito: false,
        estrelas: 3,
        titulo: "Salada Caesar",
        descricaoReduzida: "Salada Caesar com peito de frango grelhado, croûtons e molho cremoso.",
        preco: 19.99,
        precoAntigo: 24.99,
        bandeira: "Saudável!"
    },
    
];
export default function GridCards(){
    return(
        <section className="p-5 grid grid-cols-2 gap-4">
            {
                foodItems.map((item, index) => 
                <Card 
                    key={index}
                    imagem={item.imagem}
                    favorito={item.favorito} 
                    setFavorito={"setFavorito"}
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