import React from 'react'

const addTest = () => {
  return (
    <div>
      <div className='item border border-primary rounded'>
        <div className='main pt-2 pb-2'>
          <h1>Add New Test</h1>
        </div>

        <div className='pt-5 text-center frm'>
          <form>
            <div className='row mb-3'>
              <div className='col-6 col-3'>

                <label id='lbel' className='me-3 col-3'>Test Name</label>
                <input type='text' id='category-name' />

              </div>
              <div className='col-6'>
                <label id='lbel' className='me-3 col-3'>Test Description</label>
                <input type="text" />
                </div>
              </div>
           
          </form>
          <div id='btn' className='d-flex justify-content-center me-5 pb-4 mt-5'>
            <button className='btn btn-primary mx-2 btn-lg'>ADD</button>
            <button className='btn btn-danger btn-lg'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default addTest