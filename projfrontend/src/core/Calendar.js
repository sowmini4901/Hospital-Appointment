import React, { Component } from 'react';

import { AppointmentPicker } from 'react-appointment-picker';

export default class Calendar extends Component {
  state = {
    loading: false,
    continuousLoading: false,
    booked:0
  };

  addAppointmentCallback = ({
    addedAppointment: { day, number, time, id },
    addCb
  }) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(
          `Added appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        addCb(day, number, time, id);
        this.setState({ loading: false });
        this.setState({ booked: id})
      }
    );
  };

  removeAppointmentCallback = ({ day, number, time, id }, removeCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(
          `Removed appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        removeCb(day, number);
        this.setState({ loading: false });
      }
    );
  };


  render() {
    const days = [
      [
        { id: 1, number: 1, periods: 2 },
        { id: 2, number: 2 },
        null,
        { id: 3, number: '3', isReserved: true },
        { id: 4, number: '4' },
        null,
        { id: 5, number: 5 },
        { id: 6, number: 6 }
      ],
      [
        { id: 7, number: 1, isReserved: true, periods: 3 },
        { id: 8, number: 2, isReserved: true },
        null,
        { id: 9, number: '3', isReserved: true },
        { id: 10, number: '4' },
        null,
        { id: 11, number: 5 },
        { id: 12, number: 6 }
      ],
      [
        { id: 13, number: 1 },
        { id: 14, number: 2 },
        null,
        { id: 15, number: 3, isReserved: true },
        { id: 16, number: '4' },
        null,
        { id: 17, number: 5 },
        { id: 18, number: 6 }
      ],
      [
        { id: 19, number: 1 },
        { id: 20, number: 2 },
        null,
        { id: 21, number: 3 },
        { id: 22, number: '4' },
        null,
        { id: 23, number: 5 },
        { id: 24, number: 6 }
      ],
      [
        { id: 25, number: 1, isReserved: true },
        { id: 26, number: 2 },
        null,
        { id: 27, number: '3', isReserved: true },
        { id: 28, number: '4' },
        null,
        { id: 29, number: 5 },
        { id: 30, number: 6, isReserved: true }
      ]
    ];
    const { loading, continuousLoading, booked } = this.state;

//     const successMessage=()=>{
//       return(
//           <div className="row">
//           <div className="col-md-6 offset-sm-3 text-left">
//       <div className="alert alert-success" style={{display: success ? "":"none"}}
//        >
//        Account created successfully. Please <Link to="/signin">Login Here</Link>
//        </div>
//        </div>
//        </div>)
//       }

      
// const errorMessage=()=>{
//   return(
//    <div className="row">
//      <div className="col-md-6 offset-sm-3 text-left">
//   <div className="alert alert-danger" style={{display: error ? "":"none"}}
//    >
//   {error}
//    </div>
//    </div>
//    </div>
//    )
//   }
const books=JSON.stringify(days);

    return (
      <div>
        <h1>Choose an Appointment</h1>
        <AppointmentPicker
          addAppointmentCallback={this.addAppointmentCallback}
          removeAppointmentCallback={this.removeAppointmentCallback}
          initialDay={new Date('2018-05-05')}
          days={days}
          maxReservableAppointments={1}
          alpha
          visible
          selectedByDefault
          loading={loading}
        />
       
        
     <button className="btn btn-success ml-5 mt-5 rounded">Confirm Appointment</button>
      </div>
    );
  }
}