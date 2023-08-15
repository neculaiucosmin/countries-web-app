import SearchIconDark from "../assets/search.svg"
import SearchIconLight from "../assets/search-light.svg"
import React from "react";


const Search: React.FC<{
    handleSearch: (arg: string) => void,
    darkTheme: boolean
}> = ({handleSearch, darkTheme}) => {

    return (
        <div className={`flex align-middle flex-row gap-5 p-4 rounded-lg  mx-5 mt-8 my-2 shadow max-w-lg ${darkTheme? 'bg-c-blue-dm' : 'bg-c-white'}`}>
            <label htmlFor={"search"} className={"text-c-gray-lm ml-2"}>
                <img src={darkTheme ? SearchIconLight : SearchIconDark} alt="Search" className={"colored-svg h-8"}/>
            </label>
            <input className={`w-full focus:outline-none font-nunito ${darkTheme? 'text-c-white bg-c-blue-dm': 'text-c-gray-lm'}`}
                   id={"search"}
                   placeholder={"Search for a country..."}
                   type="text"
                   onChange={e => handleSearch(e.target.value)}
            />
        </div>
    )
}

export default Search;