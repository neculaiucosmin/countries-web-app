import BackIcon from "../assets/back.svg"
import BackIconWhite from "../assets/back-white.svg"
import {Country} from "../interfaces/country.ts";
import React from "react";


const CountryNameCard: React.FC<{ name: string, darkTheme: boolean }> = ({name, darkTheme}) => {

    return (
        <div className={`w-24  h-fit py-1 text-center text-sm shadow-full-shadow ${darkTheme ? 'bg-c-blue-dm text-c-white' :''}`}>
            <span>{name.length > 11 ? name.slice(0, 10).concat("..") : name}</span>
        </div>
    )
}

const MoreInfo: React.FC<{ prop: Country, darkTheme: boolean }> = ({prop, darkTheme}) => {

    console.log(prop)
    return (
        <div className={"mx-5"}>
            <div className={`flex gap-1 px-5 my-7 py-1 shadow-full-shadow w-fit ${darkTheme ? 'text-c-white': ''}`}>
                <img src={darkTheme ? BackIconWhite : BackIcon} alt="Back"/>
                <span>Back</span>
            </div>

            <div>
                <div>
                    <img src={prop.flag} alt="Flag"/>
                </div>
                <div>
                    <div className={"my-10 w-32 md:my-7 md:mx-5"}>
                        <p className={`my-3 font-bold text-xl whitespace-normal ${darkTheme ? 'text-c-white' : ''}`}>{prop.name}</p>
                        <p className={`my-2.5 font-normal whitespace-nowrap ${darkTheme ? 'text-c-white' : ''}`}>Native
                            name:
                            <span className={"font-thin"}> {prop.nativeName}</span></p>
                        <p className={`my-2.5 font-normal whitespace-nowrap ${darkTheme ? 'text-c-white' : ''}`}>Population:
                            <span className={"font-thin"}> {new Intl.NumberFormat().format(prop.population)}</span>
                        </p>
                        <p className={`my-2.5 font-normal whitespace-nowrap ${darkTheme ? 'text-c-white' : ''}`}>Region:
                            <span className={"font-thin"}> {prop.region}</span></p>
                        <p className={`my-2.5 font-normal whitespace-nowrap ${darkTheme ? 'text-c-white' : ''}`}>Capital:
                            <span className={"font-thin"}> {prop.capital}</span></p>
                    </div>
                    <div>
                        <p className={`my-2.5 font-normal whitespace-nowrap ${darkTheme ? 'text-c-white' : ''}`}>Top
                            Level Domain:
                            <span className={"font-thin"}> {prop.domain}</span></p>
                        <p className={`my-2.5 font-normal whitespace-nowrap ${darkTheme ? 'text-c-white' : ''}`}>Currencies:
                            <span className={"font-thin"}> {prop.currencies ? prop.currencies.map(e =>
                                <span>{e.name}</span>) : ""}</span></p>

                        <p className={`my-2.5 font-normal whitespace-nowrap ${darkTheme ? 'text-c-white' : ''}`}>Languages:
                            <span className={"font-thin"}> {prop.language ? prop.language.map(e =>
                                <span>{e.name},</span>) : ""}</span></p>
                    </div>
                    <div className={"w-fit my-5"}>
                        <p className={`font-bold text-lg my-2 ${darkTheme ? 'text-c-white': ''}`}>Border Countries:</p>

                        <div className={"flex flex-wrap gap-2"}>

                            {prop.border !== undefined ? prop.border.map((item, index) => (
                                    <CountryNameCard key={index} name={item} darkTheme={darkTheme}/>))
                                : ""

                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MoreInfo;