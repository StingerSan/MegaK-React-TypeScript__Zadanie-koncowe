import {BinanceOneCryptoPairData} from "../../types/crypto-data.js";

interface Props {
    onePair: BinanceOneCryptoPairData;
}

export const CryptoPriceOfOnePair = (props: Props) => (
    <p style={{backgroundColor: Number(props.onePair.weightedAvgPrice) > 0 ? 'green' : 'red'}}>
        {props.onePair.symbol} aktualnie jest handlowany za średnią cene {props.onePair.weightedAvgPrice}
    </p>
);
