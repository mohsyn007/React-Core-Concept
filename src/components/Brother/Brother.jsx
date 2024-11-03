import { useContext } from "react";
import { MoneyContex } from "../Grandpa/Grandpa";


const Brother = () => {
    const [money]=useContext(MoneyContex);
    return (
        <div>
            <h2>Brother</h2>
            <p>Granpa:{money}</p>
        </div>
    );
};

export default Brother;