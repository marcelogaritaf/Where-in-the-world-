import axios, { AxiosRequestConfig } from "axios";
// export interface FecthResponse<T>{
//     results:T[];
// }
const axiosInstance = axios.create({
    baseURL:'https://restcountries.com/v3.1'
})
class ApiCountry<T>{
    endpoint :string
    constructor(endpoint:string){
        this.endpoint= endpoint
    }
    getAll=async(config:AxiosRequestConfig)=>{
        const res = await axiosInstance.get<T[]>(this.endpoint, config)
        return res.data
    }
}
export default ApiCountry;