import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const AddAppointment = () => {
    const [selectDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const tests =[
        {label: "Sugar Test", value: 1},
        {label:"Sugar Test", value: 2}, 
        {label:"ECG Test", value: 3},
    ]
    return (
        <div><div className='Item border border-primary rounded'>
            <div className='main pt-2" pb-2'>
                <h1> Make New Appointment</h1>
            </div>


            <div className='pt-5 text-center frm'>
                <form>
                    <div className='row mb-3'>
                        <div className='col-6 col-3'>
                            <label id='1be1' className='me-3 col-3'>First Name</label>
                            <input type="text" placeholder=""></input>

                            <label id='1be1' className='me-3 col-3'>First Name</label>
                            <input type="text" placeholder=""></input>

                            <label id='1be1' className='me-3 col-3'>Last Name </label>
                            <input type="text" placeholder=""></input>

                            <label id='1be1' className='me-3 col-3'>Mobile Number</label>
                            <input type="text" placeholder=""></input>
                        </div>
                        <div className='col-6'>
                        <label id='1be1' className='me-3' col-3>Select Test </label>
                        <select ClassName="from-select" id="">
                            {tests.map(option => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    
                        <label htmlFor='selectDate'className='me-3 col-3'>Date</label>
                            <DatePicker 
                                id='selectDate'
                                selected={selectDate}
                                onChange={date =>
                                setSelectedDate(date)}
                                dateFormat="dd-MM-yyyy h:mm aa" //format including time 
                                showTimeSelect //Enabling time selection 
                                timeFormat="hh:mm aa" //24-hour format for time
                            />
                        </div>
                   </div>
               </form>
               <div id='btn' className='d-flex justify-content-end me-5 pb-4'>
                    <button className='btn btn-primary mx-2 btn-lg'>Add</button>
                    <button className='btn btn-danger mx-2 btn-lg'>Cancel</button>
               </div>
           </div>
        </div></div>                            
    )

}

export default AddAppointment