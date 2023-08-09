import DarkIcon from "../assets/dark-mode.svg";

const Header = ()=>{
    return (
        <div className={"flex flex-row justify-between font-nunito px-3 py-2 shadow h-14 bg-c-white my-1"}>
            <span className={"font-bold"}>Where in the world?</span>
            <div className={"flex gap-2 h-fit"}>
                <img src={DarkIcon} alt="Dark Mode"/>
                <button className={"font-300"}>Dark Mode</button>
            </div>
        </div>
    )
}

export default Header;