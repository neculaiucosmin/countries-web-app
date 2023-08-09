import {Country} from "../interfaces/country.ts";
import React from "react";


const CountryCard: React.FC<{ prop: Country }> = ({prop}) => {

    return (
        <div className={"shadow rounded-xl overflow-clip"}>
            <img src={prop.flag} alt={prop.name} width={"320px"}/>

            <div className={"my-10 mx-10 w-32"}>
                <p className={"my-3 font-bold text-xl whitespace-normal"}>{prop.name}</p>
                <p className={"my-1 font-thin whitespace-normal"}><span className={"font-normal"}>Population:</span> {new Intl.NumberFormat().format(prop.population)}</p>
                <p className={"my-1 font-thin whitespace-normal"}><span className={"font-normal"}>Region:</span> {prop.region}</p>
                <p className={"my-1 font-thin whitespace-normal"}><span className={"font-normal"}>Capital:</span> {prop.capital}</p>
            </div>
        </div>
    )

}

export default CountryCard