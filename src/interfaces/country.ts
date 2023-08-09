interface Languages {
    iso639_1?: string
    iso639_2?: string
    name: string
    nativeName?: string
}

interface Curencies {
    code: string
    name: string
    symbol: string
}

export interface Country {
    name: string,
    nativeName: string,
    population: number,
    flag: string,
    region: string,
    capital: string | undefined,
    domain: string[],
    currencies: Curencies[] | undefined,
    language: Languages[]
}

export enum Regions {
    Africa,
    America,
    Asia,
    Europe,
    Oceania
}

