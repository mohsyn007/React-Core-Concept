import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

export const AssetContex=createContext('Gold');
export const MoneyContex=createContext(1000);
const Grandpa = () => {
    const asset='diamond';
    const [money,setMoney]=useState(1000);
    return (
        <div className="grandpa ">
          <MoneyContex.Provider value={[money,setMoney]}>
          <h2>Grandpa</h2>
          <p>Net Money:{money}</p>
           <AssetContex.Provider value="Gold">
           <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
            </section>
           </AssetContex.Provider>
          </MoneyContex.Provider>
        </div>
    );
};
/*
1.Create a context and export it
2.Add provider for the context with value(value could be anything)
3.useContext to access value in the context API
*/

export default Grandpa;