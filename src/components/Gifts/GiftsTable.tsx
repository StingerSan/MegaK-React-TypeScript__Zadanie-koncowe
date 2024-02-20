import React from "react";
import { GiftEntity } from "../../../../../Mega K/Etap 5 Type Script/Zadanie - Przepisywanie projektu z JS na TS/Projekt API do podłaczenia pod aplikacje Reactowa/Projekt 3/Lista prezentów przerabiamy na TS/types/gift";

import { GiftTableRow } from "./GiftTableRow";


interface Props {
    gifts: GiftEntity[];
}

export const GiftsTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Nazwa</th>
            <th>Ilość</th>
        </tr>
        </thead>
        <tbody>
        {
            props.gifts.map(gift => (
                <GiftTableRow
                    gift={gift}
                    key={gift.id}
                />))
        }
        </tbody>
    </table>
);


