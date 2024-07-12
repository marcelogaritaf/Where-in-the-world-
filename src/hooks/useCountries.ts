import { useQuery } from "react-query"
import ApiCountry from "../services/Api-country"
import useCountryStore from "../store";
interface currency{
    name:string,
    symbol: string
}
interface Currencies{
    [code:string]:currency
}
interface Languages{
    [code:string]:string
}
interface NativeLanguageName{
    official:string,
    common:string
}
interface NativeName{
    [languageCode:string]:NativeLanguageName
}
export interface country{ 
    name:{common:string, official:string, nativeName:NativeName};
    population: number;
    capital:string[];
    region:string;
    subregion:string;
    continents:string[];
    flags:{png:string, svg:string};
    tld:string[];
    borders:string[];
    languages:Languages;
    currencies: Currencies
}
const apiCountry = new ApiCountry<country>('/all')
const apiCountryByName= new ApiCountry<country>('/name/')
const useCountries=()=>{
    const countryQuery = useCountryStore(s=>s.countryQuery)
    return useQuery<country[]>({
        queryKey:['countries', countryQuery],
        queryFn:()=>{
            if(countryQuery.searchText){
                return apiCountryByName.getByName(countryQuery.searchText) 
            }else{
                return apiCountry.getAll()
            }
        }
    })
}
export default useCountries;