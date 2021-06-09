export const addAppointment = (item, next)=>{
  let appointment=[]
  if(typeof window !== undefined){
      if(localStorage.getItem("appointment")){
          appointment = JSON.parse(localStorage.getItem("appointment"))

      }
    //   if(appointment.length==0)
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
}