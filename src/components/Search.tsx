import SearchIcon from "../assets/search.svg"
import React from "react";


interface ISearch {
    handleSearch: (arg: string) => void
}

const Search:React.FC<ISearch> = ({handleSearch}) => {

    return (
        <div  className={"flex align-middle flex-row gap-5 p-4 bg-c-white rounded-lg  mx-5 mt-8 my-2 shadow max-w-lg"}>
            <label htmlFor={"search"} className={"text-c-gray-lm ml-2"}>
                <img src={SearchIcon} alt="Search" className={"colored-svg h-8"}/>
            </label>
            <input className={"w-full focus:outline-none font-nunito text-c-gray-lm"}
                   id={"search"}
                   placeholder={"Search for a country..."}
                   type="text"
                   onChange={e=> handleSearch(e.target.value)}
            />
        </div>
    )
}

export default Search;