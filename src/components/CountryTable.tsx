import {Country} from "../interfaces/country.ts";
import CountryCard from "./CountryCard.tsx";
import React from "react";

const CountryTable: React.FC<{ props: Country[] }> = ({props}) => {

    return (
        <div className={"grid place-content-center w-full gap-5"}>
            {props.map((item, index) => <CountryCard key={index} prop={item}/>)}
        </div>
    )

}
export default CountryTable