import React from 'react'
import "../style/style.css"
const addPatient = () => {
  return (
    <div>
    <div className='item border border-primary rounded'>
        <div className='main pt-2 pb-2'>
          <h1>Add New Patient</h1>
        </div>

        <div className='pt-5 text-center frm'>
          <form>
            <div className='row mb-3'>
              <div className='col-6 col-3'>

                <label id='lbel' className='me-3 col-3'>First Name</label>
                <input type='text' id='category-name' />

                <label id='lbel' className='me-3 col-3'>Last Name</label>
                <input type='text' id='category-name' />

                <label id='lbel' className='me-3 col-3'>Mobile Number</label>
                <input type="text" />

                <label id='lbel' className='me-3 col-3'>Email</label>
                <input type="text" />

              </div>
              <div className='col-6'>
                <label id='lbel' className='me-3 col-3'>Address</label>
                <input type="text" />
                <label id='lbel' className='me-3 col-3'>Street</label>
                <input type="text" />
                <label id='lbel' className='me-3 col-3'>City</label>
                <input type="text" />
                <div id='gflx' >
                <label  id='glbl' className=' col-3' style={{marginRight: '29px'}}>Gender</label>
                 
                 <div  className='form-check ml-10 form-check-inline ' >
                <div id='ginput' className='form-check form-check-inline'>
                  <input type='radio' className='form-check-input me-4' name='categoryType' value='Main' style={{ borderColor: '#4955A1' }}/>
                  <label  className='me-4'>Male</label>
                </div>
                <div id='ginput' className='form-check form-check-inline'>
                  <input type='radio' className='form-check-input me-4' name='categoryType' value='Sub'  style={{ borderColor: '#4955A1' }}/>
                  <label className='me-4'>Female</label>
                 </div>
                 </div>
                </div>
              </div>
            </div>
           
          </form>
          <div id='btn' className='d-flex justify-content-end me-5 pb-4'>
            <button className='btn btn-primary mx-2 btn-lg'>ADD</button>
            <button className='btn btn-danger btn-lg'>Cancel</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default addPatient