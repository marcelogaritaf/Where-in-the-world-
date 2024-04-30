import { useQuery } from "react-query"
import ApiCountry from "../services/Api-country"
import { country } from "./useCountries"

const apiCountry = new ApiCountry<country>('/name')
const useCountry=(name:string)=>useQuery<country>({
    queryKey:['countries', name],
    queryFn:()=> apiCountry.getByName(name)
})
export default useCountry;