import { create } from "zustand"

interface CountryQuery{
    searchText?: string;
    filterRegion?: string;
}
interface CountryQueryStore{
    countryQuery: CountryQuery,
    setSearchText: (searchText:string)=>void,
    setFilterRegion: (filterRegion:string)=>void
}
const useCountryStore=create<CountryQueryStore>(set=>({
    countryQuery: {},
    setSearchText:(searchText)=> set(()=>({countryQuery:{searchText}})),
    setFilterRegion: (filterRegion)=>set((state)=>({countryQuery:{...state.countryQuery, filterRegion}}))
}));
export default useCountryStore;