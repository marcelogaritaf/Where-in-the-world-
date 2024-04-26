import { create } from "zustand"

interface CountryQuery{
    searchText?: string;
}
interface CountryQueryStore{
    countryQuery: CountryQuery,
    setSearchText: (searchText:string)=>void
}
const useCountryStore=create<CountryQueryStore>(set=>({
    countryQuery: {},
    setSearchText:(searchText)=> set(()=>({countryQuery:{searchText}}))
}));
export default useCountryStore;