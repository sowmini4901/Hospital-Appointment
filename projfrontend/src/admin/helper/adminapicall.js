import { API } from "../../backend";

//category
export const createCategory =(userId, token, category)=>{
    return fetch(`${API}/category/create/${userId}`,{
        method:"POST",
        headers:{
        Accept:"application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }
    )
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}



export const getCategories=()=>{
    return fetch(`${API}/categories`, {
        method:"GET"
    }
    )
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}
export const getCategory=(categoryId)=>{
    return fetch(`${API}/category/${categoryId}`, {
        method:"GET"
    }
    )
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}

export const updateCategory =(categoryId, userId, token, category)=>{
    return fetch(`${API}/category/${categoryId}/${userId}`,{
        method:"PUT",
        headers:{
        Accept:"application/json",
        Authorization: `Bearer ${token}`
        },
        body: category
    }
    )
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}

export const deleteCategory =(categoryId, userId, token)=>{
    return fetch(`${API}/category/${categoryId}/${userId}`,{
        method:"DELETE",
        headers:{
        Accept:"application/json",
        Authorization: `Bearer ${token}`
        }
    }
    )
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}




//product calls
//doctor routes
//creating a doctor
export const createDoctor =(userId, token, doctor)=>{
    return fetch(`${API}/doctor/create/${userId}`,{
        method:"POST",
        headers:{
        Accept:"application/json",
        Authorization: `Bearer ${token}`
        },
        body: doctor
    }
    )
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}
//get a doctor

export const getDoctor=doctorId=>{
    return fetch(`${API}/doctor/${doctorId}`,{
        method: "GET"
    }).then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err))
}

//get all doctors
export const getDoctors=()=>{
    return fetch(`${API}/doctors`, {
        method:"GET"
    }
    )
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}

//delete a doctor
export const deleteDoctor =(doctorId, userId, token)=>{
    return fetch(`${API}/doctor/${doctorId}/${userId}`,{
        method:"DELETE",
        headers:{
        Accept:"application/json",
        Authorization: `Bearer ${token}`
        }
    }
    )
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}



//update a doctor
export const updateDoctor =(doctorId, userId, token, doctor)=>{
    return fetch(`${API}/doctor/${doctorId}/${userId}`,{
        method:"PUT",
        headers:{
        Accept:"application/json",
        Authorization: `Bearer ${token}`
        },
        body: doctor
    }
    )
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
}

