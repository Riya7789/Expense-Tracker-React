import React from 'react'
import Button from './Button'

const AddTransaction = ({amount,details}) => {
  return (
        <div className='addTransaction'>
            <div className='info'>
                <input 
                    id='amount'
                    type='number'
                    placeholder='Enter Amount'
                    value={amount}
                />
                &nbsp;
                <input
                    type='text'
                    placeholder='Enter Details'
                    value={details}
                />
            </div>
            <div className='radioBtn'>
                <input type='radio' id='expense' value='Expense'/>
                <label htmlFor='expense'>Expense</label>

                <input type='radio' id='income' value='Income'/>
                <label htmlFor='income'>Income</label>
            </div>

            <Button buttonText='Add Transaction'/>
        </div>
  )
}

export default AddTransaction
