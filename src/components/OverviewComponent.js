import React from 'react'
import Button from './Button';
import '../App.css';

const OverviewComponent = ({ income, expense}) => {
    // const bal = income - expense;
  return (
      <div className='balance'>
        <p>Balance <span><b>Rs.</b></span></p>
        <Button buttonText='ADD'/>
      </div>
  )
}

export default OverviewComponent
