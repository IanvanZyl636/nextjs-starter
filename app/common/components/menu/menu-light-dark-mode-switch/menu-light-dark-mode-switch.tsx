'use client'
import {ChangeEvent, useEffect, useState} from "react";


export default function MenuLightDarkModeSwitch(){
    const [isLightMode,setIsLightMode] = useState(false);

    useEffect(()=>{
        const body = document.body;
        isLightMode ? body.classList.remove('dark-mode') : body.classList.add('dark-mode');
    },[isLightMode])

    const inputChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setIsLightMode(!isLightMode);
    }

    return (
        <input type={"checkbox"} onChange={(e)=> inputChange(e)} checked={isLightMode} />
    )
}
