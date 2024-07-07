import React from 'react'
import './Ready.css'

const Ready = () => {
  return (
    <div className='Ready'>
      <div className='rea'>
        <h6>Ready To Talk</h6>
      </div>
      <div className='col'>
        <input type='text' defaultValue='Name' onFocus={(e) => e.target.value = ''} onBlur={(e) => e.target.value === '' ? e.target.value = 'Name' : null}/>
        <input type='email' defaultValue='Business email' onFocus={(e) => e.target.value = ''} onBlur={(e) => e.target.value === '' ? e.target.value = 'Business email' : null}/>
        <input type='tel' defaultValue='Contact Number' onFocus={(e) => e.target.value = ''} onBlur={(e) => e.target.value === '' ? e.target.value = 'Contact Number' : null}/>
        <input type='text' defaultValue='Request For' onFocus={(e) => e.target.value = ''} onBlur={(e) => e.target.value === '' ? e.target.value = 'Request For' : null}/> '
      </div>
      <button>Submit</button>
    </div>
  );
}

export default Ready;
