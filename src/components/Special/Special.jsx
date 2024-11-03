import { useContext } from "react";
import { AssetContex } from "../Grandpa/Grandpa";


const Special = ({asset}) => {
    const gift=useContext(AssetContex);
    return (
        <div>
            <h2>Special</h2>
            <p>has: {asset}</p>
            <p>Also:{gift}</p>
        </div>
    );
};

export default Special;