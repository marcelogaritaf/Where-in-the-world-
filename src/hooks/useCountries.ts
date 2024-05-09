import { useQuery } from "react-query"
import ApiCountry from "../services/Api-country"
import useCountryStore from "../store";

export interface country{ 
    name:{common:string, official:string};
    population: number;
    capital:string[];
    region:string;
    subregion:string;
    continents:string[];
    flags:{png:string, svg:string};
    tld:string[];
    borders:string[];
    languages:{[code:string]:string};
}
const apiCountry = new ApiCountry<country>('/all')
const useCountries=()=>{
    const countryQuery = useCountryStore(s=>s.countryQuery)
    return useQuery<country[]>({
        queryKey:['countries', countryQuery],
        queryFn:()=>apiCountry.getAll({
            params:{
                search:countryQuery.searchText
            }
        })
    })
}
export default useCountries;