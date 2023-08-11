import './App.css'
import Header from "./components/Header.tsx";
import Search from "./components/Search.tsx";
import Filter from "./components/Filter.tsx";
import data from "../data.json"
import CountryTable from "./components/CountryTable.tsx";
import { useState} from "react";
import {Country} from "./interfaces/country.ts";

const mappedCountry: Country[] = data.map(e => ({
    name: e.name,
    nativeName: e.nativeName,
    population: e.population,
    region: e.region,
    flag: e.flag,
    capital: e.capital,
    domain: e.topLevelDomain,
    currencies: e.currencies,
    language: e.languages

}));

function App() {


    const [region, setRegion] = useState(mappedCountry)
    const [countries, setCountries] = useState(region.slice(0, 15))

    const [appTheme, setAppTheme] = useState(true)

    const handleSearch = (countryName: string) => {
        if (countryName.length > 0) {

            const filteredItems = region.filter(i => i.name.toLowerCase().includes(countryName.toLowerCase()))

            console.log(countries)
            const limit = Math.min(5, filteredItems.length)
            setCountries(filteredItems.slice(0, limit))
        } else {
            setCountries(countries.slice(0, 10))
        }
    }
    const handleFilter = (reg: string | null) => {

        if (!reg) {
            return
        } else {
            const regionToLowerCase = reg.toLowerCase();
            setRegion(() => mappedCountry.filter(country => country.region.toLowerCase() === regionToLowerCase))
        }
    }

    return (
        <>
            <div className={`font min-h-screen ${appTheme ? 'bg-dark-blue-dm' : 'bg-light-gray-lm'}`}>
                <Header handleThemeUpdate={() => setAppTheme(theme => !theme)} darkTheme={appTheme}/>
                <Search handleSearch={handleSearch} darkTheme={appTheme}/>
                <Filter handleFilter={handleFilter} darkTheme={appTheme}/>
                <CountryTable props={countries} darkTheme={appTheme}/>
            </div>

        </>
    )
}

export default App
