import React from "react";
import {Gift} from "../../types/gifts";
import { GiftTableRow } from "./GiftTableRow";


interface Props {
    gifts: Gift[];
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


