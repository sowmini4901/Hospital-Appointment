export const addAppointment = (item, next)=>{
  let appointment=[]
  if(typeof window !== undefined){
      if(localStorage.getItem("appointment")){
          appointment = JSON.parse(localStorage.getItem("appointment"))

      }
    if(appointment.length==0)
      appointment.push({
          ...item
      })
      localStorage.setItem("appointment", JSON.stringify(appointment))
      next();
  }
}

export const loadAppointment = ()=>{
    if(typeof window !== undefined){
        if(localStorage.getItem("appointment")){
         return JSON.parse(localStorage.getItem("appointment"))
        }
    }
};

export const cancelAppointment =(doctorId)=>{
    let appointment=[]
    if(typeof window !== undefined){
        if(localStorage.getItem("appointment")){
            appointment = JSON.parse(localStorage.getItem("appointment"))
  
        }
        appointment.map((doctor, i)=>{
            if(doctor._id===doctorId)
            appointment.splice(i,1)
        })
        localStorage.setItem("appointment", JSON.stringify(appointment))
    }
    return appointment;
}

export const cartEmpty = next =>{
    if(typeof window !== undefined){
       localStorage.removeItem("appointment");
       next();
    }
}