import {Gift} from "../../types/gifts";


interface Props {
    gift: Gift
}

export const GiftTableRow = (props: Props)=>  (
    <tr>
        <td>{props.gift.id}</td>
        <td>{props.gift.name}</td>
        <td>{props.gift.count}</td>
    </tr>
)
