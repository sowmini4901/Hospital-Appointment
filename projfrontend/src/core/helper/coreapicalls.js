import { API } from "../../backend";

export const getDoctors= ()=>{
    return fetch(`${API}/doctors`, {method:"GET"})
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}