export default function Carousel({imagens}){
    return (
        <div className=" aspect-square overflow-x-auto flex man snap-mandatory snap-x "> 
            {
                imagens.map((item, index) => (
                    <img 
                        key={index}
                        src={item.img} 
                        alt="" 
                        className="w-full h-auto max-h-1/2 object-cover aspect-square snap-center"
                    />
                ))
            }
        </div>
    )
}