import React, {useEffect, useState} from "react";
import { GiftEntity } from "../../../../../Mega K/Etap 5 Type Script/Zadanie - Przepisywanie projektu z JS na TS/Projekt API do podłaczenia pod aplikacje Reactowa/Projekt 3/Lista prezentów przerabiamy na TS/types/gift";
import {GiftsTable} from "./GiftsTable";




export const GiftsList = () => {
    const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/gift');
            const data = await res.json();
            setGiftsList(data.giftsList);
        })()
    },[])

    if(giftsList === null) {
        return <p>Wczytowanie...</p>
    }

    return <>
        <h1>Gifts</h1>
        <GiftsTable gifts={giftsList}/>
    </>;
};
