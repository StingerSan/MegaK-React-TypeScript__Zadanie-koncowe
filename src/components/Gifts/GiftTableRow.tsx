import React from "react";
import { GiftEntity } from "../../../../../Mega K/Etap 5 Type Script/Zadanie - Przepisywanie projektu z JS na TS/Projekt API do podłaczenia pod aplikacje Reactowa/Projekt 3/Lista prezentów przerabiamy na TS/types/gift";



interface Props {
    gift: GiftEntity
}

export const GiftTableRow = (props: Props)=>  (
    <tr>
        <td>{props.gift.id}</td>
        <td>{props.gift.name}</td>
        <td>{props.gift.count}</td>
    </tr>
)
