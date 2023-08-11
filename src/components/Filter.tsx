import Expand from "../assets/expand.svg"
import React, {useState} from "react";
import {DarkTheme} from "../interfaces/country.ts";

export interface IFilter {
    handleFilter: (reg: string|null) => void
}

const Filter: React.FC<{
    handleFilter:(reg: string|null) => void,
    darkTheme:DarkTheme }> = ({handleFilter, darkTheme}) => {
    const [showRegion, setShowRegion] = useState(false)

    return(
    <div className={`relative  rounded-lg  mx-5 mt-8 my-2 shadow w-1/2 py-3 max-w-xs mb-5 font-nunito ${darkTheme? 'bg-c-blue-dm': 'bg-c-white'}`}>
        <div className={`flex flex-row justify-between w-full pl-3 pr-3 ${darkTheme? 'bg-c-blue-dm': 'bg-c-white'}`} onClick={() => setShowRegion(!showRegion)}>
            <span className={`font-semibold cursor-pointer ${darkTheme? 'text-c-white' : 'text-dark-blue-wm'}`}>Filter by Region</span>
            <img src={Expand} alt="Expand"/>
        </div>

        {showRegion && (
            <div className={`absolute flex flex-col gap-1 w-full p-2.5 rounded-lg top-14 shadow ${darkTheme? 'bg-c-blue-dm': 'bg-c-white'}`}>
                <div className={`font-semibold cursor-pointer ${darkTheme? 'text-c-white' : 'text-dark-blue-wm'}`} onClick={(e) => {
                    setShowRegion(false);
                    handleFilter(e.currentTarget.textContent);
                }}>Africa</div>
                <div className={`font-semibold cursor-pointer ${darkTheme? 'text-c-white' : 'text-dark-blue-wm'}`} onClick={(e) => {
                    setShowRegion(false);
                    handleFilter(e.currentTarget.textContent);
                }}>Americas</div>
                <div className={`font-semibold cursor-pointer ${darkTheme? 'text-c-white' : 'text-dark-blue-wm'}`} onClick={(e) => {
                    setShowRegion(false);
                    handleFilter(e.currentTarget.textContent);
                }}>Asia</div>
                <div className={`font-semibold cursor-pointer ${darkTheme? 'text-c-white' : 'text-dark-blue-wm'}`} onClick={(e) => {
                    setShowRegion(false);
                    handleFilter(e.currentTarget.textContent);
                }}>Europe</div>
                <div className={`font-semibold cursor-pointer ${darkTheme? 'text-c-white' : 'text-dark-blue-wm'}`} onClick={(e) => {
                    setShowRegion(false);
                    handleFilter(e.currentTarget.textContent);
                }}>Oceania</div>
            </div>
        )}
    </div>)
}

export default Filter