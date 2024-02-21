import React from "react";
import { GiftEntity } from "types";



interface Props {
    gift: GiftEntity
    onGiftsChange: () => void;
}

export const GiftTableRow = (props: Props)=> {
    const deleteGift = async (event: MouseEvent) => {
        event.preventDefault()

        if (!window.confirm(`Are you sure yu want to remove ${props.gift.name}?`)) {
            return;
        }

        const res= await fetch(`http://localhost:3001/gift/${props.gift.id}`, {
            method: 'DELETE',
        });

        if ([400, 500].includes(res.status)) {
            const error = await res.json();
            alert(`Error occurred: ${error.message}`);
            return;
        }

        props.onGiftsChange();
    };

    return (
        <tr>
            <td>{props.gift.id}</td>
            <td>{props.gift.name}</td>
            <td>{props.gift.count}</td>
            <td>
                <a href="#" onClick={deleteGift}>🗑</a>
            </td>
        </tr>
    );
};
