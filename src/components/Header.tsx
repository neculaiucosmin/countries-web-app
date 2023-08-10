import DarkIcon from "../assets/dark-mode.svg";
import React from "react";
import {DarkTheme} from "../interfaces/country.ts";

type ThemeUpdate = () => void

const Header:React.FC<{handleThemeUpdate: ThemeUpdate, darkTheme:DarkTheme}> = ({handleThemeUpdate, darkTheme})=>{


    return (
        <div className={`flex flex-row justify-between font-nunito px-3 py-2 shadow h-14 ${darkTheme ? 'bg-c-blue-dm': 'bg-c-white'}`}>
            <span className={`font-bold ${darkTheme? 'text-c-white' : ''} `}>Where in the world?</span>
            <div className={`flex gap-2 h-fit ${darkTheme? 'text-c-white' : ''}`}>
                <img src={DarkIcon} alt="Dark Mode"/>
                <button className={"font-300"} onClick={handleThemeUpdate}>Dark Mode</button>
            </div>
        </div>
    )
}

export default Header;