import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useState, useEffect } from "react";

export default function Counter({setCounter}){
    const [cont, setCont] = useState(1)

    const hancleClickPlus = () => {
        setCont(cont + 1)
    }
    const hancleClickMinus = () => {
        if(cont > 1){
            setCont(cont -1)
        }
    } 

    useEffect(()=>{
        setCounter && setCounter(cont)
    }, [cont])

    return(
        <div className="flex items-center justify-center space-x-2 text-orange-500 font-semibold">
            <button onClick={hancleClickPlus}><CiCirclePlus  className="text-3xl"/></button>
                <p className="text-2xl">{cont}</p>
            <button onClick={hancleClickMinus}><CiCircleMinus  className="text-3xl"/></button>
        </div>
    )
}