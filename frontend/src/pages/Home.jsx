import GridCards from "../components/GridCards";

export default function Home({data}){
    return(
        <>
            <div className="max-w-sm m-auto">
                
                <GridCards data={data} />
            </div>
        </>
    )
}