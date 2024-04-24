import { useQuery } from "react-query"
import ApiCountry from "../services/Api-country"
export interface country{ 
    name:{common:string, official:string};
    population: number;
    capital:string[];
    region:string;
    subregion:string;
    continents:string[];
    flags:{png:string, svg:string};
}
const apiCountry = new ApiCountry<country>('/all')
const useCountries=()=>useQuery<country[]>({
    queryKey:['countries'],
    queryFn:apiCountry.getAll
})
export default useCountries;