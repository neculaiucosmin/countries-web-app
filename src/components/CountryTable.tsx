import {Country, DarkTheme} from "../interfaces/country.ts";
import CountryCard from "./CountryCard.tsx";
import React from "react";

const CountryTable: React.FC<{ props: Country[] , darkTheme: DarkTheme}> = ({props, darkTheme}) => {

    return (
        <div className={"flex flex-col items-center w-full gap-5 md:flex-row md:flex-wrap md:px-10"}>
            {props.map((item, index) =>
                <CountryCard
                    key={index}
                    prop={item}
                    darkTheme={darkTheme}/>)}
        </div>
    )

}
export default CountryTable