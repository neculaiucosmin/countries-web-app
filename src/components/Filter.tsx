import Expand from "../assets/expand.svg"
import React, {useState} from "react";

interface IFilter {
    handleFilter: (reg: string|null) => void
}

const Filter: React.FC<IFilter> = ({handleFilter}) => {
    const [showRegion, setShowRegion] = useState(false)

    return(
    <div className={"relative bg-c-white rounded-lg  mx-5 mt-8 my-2 shadow w-1/2 py-3 font-nunito"}>
        <div className={"flex flex-row justify-between w-full pl-3 pr-3"} onClick={() => setShowRegion(!showRegion)}>
            <span className={"text-dark-blue-wm font-semibold"}>Filter by Region</span>
            <img src={Expand} alt="Expand"/>
        </div>

        {showRegion && (
            <div className={"absolute flex flex-col gap-1 bg-c-white w-full p-2.5 rounded-lg top-14 shadow"}>
                <div className={"text-dark-blue-wm font-semibold"} onClick={(e) => {
                    setShowRegion(false);
                    handleFilter(e.currentTarget.textContent);
                }}>Africa</div>
                <div className={"text-dark-blue-wm font-semibold"} onClick={(e) => {
                    setShowRegion(false);
                    handleFilter(e.currentTarget.textContent);
                }}>Americas</div>
                <div className={"text-dark-blue-wm font-semibold"} onClick={(e) => {
                    setShowRegion(false);
                    handleFilter(e.currentTarget.textContent);
                }}>Asia</div>
                <div className={"text-dark-blue-wm font-semibold"} onClick={(e) => {
                    setShowRegion(false);
                    handleFilter(e.currentTarget.textContent);
                }}>Europe</div>
                <div className={"text-dark-blue-wm font-semibold"} onClick={(e) => {
                    setShowRegion(false);
                    handleFilter(e.currentTarget.textContent);
                }}>Oceania</div>
            </div>
        )}
    </div>)
}

export default Filter