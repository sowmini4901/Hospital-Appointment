export const addAppointment = (item, next)=>{
  let appointment=[]
  if(typeof window !== undefined){
      if(localStorage.getItem("appointment")){
          appointment = JSON.parse(localStorage.getItem("appointment"))

      }
  
      appointment.push({
          ...item
      })
      localStorage.setItem("appointment", JSON.stringify(appointment))
      next();
  }
}
// export const bookAppointment = (item, next)=>{
//     let appoint=[]
//     if(typeof window !== undefined){
//         if(localStorage.getItem("appoint")){
//             appoint = JSON.parse(localStorage.getItem("appoint"))
  
//         }
//       if(appoint.length==0)
//         appoint.push({
//             ...item
//         })
//         localStorage.setItem("appoint", JSON.stringify(appoint))
//         next();
//     }
//   }

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

// export const cancelAppoint =(dayId)=>{
//     let appoint=[]
//     if(typeof window !== undefined){
//         if(localStorage.getItem("appoint")){
//             appoint = JSON.parse(localStorage.getItem("appoint"))
  
//         }
//         appoint.map((day, i)=>{
//             if(day._id===dayId)
//             appoint.splice(i,1)
//         })
//         localStorage.setItem("appoint", JSON.stringify(appoint))
//     }
//     return appoint;
// }

export const cartEmpty = next =>{
    if(typeof window !== undefined){
       localStorage.removeItem("appointment");
       let appointment=[]
       localStorage.setItem("appointment", JSON.stringify(appointment))
       next();
    }
}