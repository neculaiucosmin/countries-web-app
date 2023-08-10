import {Country, DarkTheme} from "../interfaces/country.ts";
import React from "react";


const CountryCard: React.FC<{ prop: Country, darkTheme: DarkTheme }> = ({prop, darkTheme}) => {

    return (
        <div className={`shadow rounded-xl overflow-clip h-96 ${darkTheme ? 'bg-c-blue-dm' : ''}`}>
            <div className={"w-60 h-40"}>
                <img
                    src={prop.flag}
                    alt={prop.name}
                    className={"w-full h-full"}
                />
            </div>

            <div className={"my-10 mx-8 w-32 md:my-7 md:mx-5"}>
                <p className={`my-3 font-bold text-xl whitespace-normal ${darkTheme ? 'text-c-white' : ''}`}>{prop.name}</p>
                <p className={`my-1 font-normal whitespace-nowrap ${darkTheme ? 'text-c-white' : ''}`}>Population:
                    <span className={"font-thin"}> {new Intl.NumberFormat().format(prop.population)}</span>
                </p>
                <p className={`my-1 font-normal whitespace-nowrap ${darkTheme ? 'text-c-white' : ''}`}>Region:
                    <span className={"font-thin"}> {prop.region}</span></p>
                <p className={`my-1 font-normal whitespace-nowrap ${darkTheme ? 'text-c-white' : ''}`}>Capital:
                    <span className={"font-thin"}> {prop.capital}</span></p>
            </div>
        </div>
    )

}

export default CountryCard