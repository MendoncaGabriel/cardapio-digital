import { useContext } from "react";
import GridCards from "../components/GridCards";
import {ProdutoContext} from '../providers/Produto'

export default function Home(){
    const {produtos} = useContext(ProdutoContext)

    return(
        <>
            <div className="max-w-sm m-auto">
                <GridCards produtos={produtos} />
            </div>
        </>
    )
}