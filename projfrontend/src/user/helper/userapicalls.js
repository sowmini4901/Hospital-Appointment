import { API } from "../../backend";

export const updatePro =(userId, token, user)=>{
    return fetch(`${API}/user/${userId}`,{
        method:"PUT",
        headers:{
        Accept:"application/json",
        Authorization: `Bearer ${token}`
        },
        body: user
    }
    )
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}
