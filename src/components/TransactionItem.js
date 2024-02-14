import React from 'react'
import Button from './Button';

const TransactionItem = ({ transaction, removeTransaction }) => {
  return (
    <div className='transactionInfo'>
      {/* <span>{transaction.details}</span> */}
      {/* <span>{transaction.amount}</span> */}
      <Button buttonText='Remove'/>
    {/* //    onClick={() => removeTransaction(transaction.id)}/> */}
    </div>
  )
}

export default TransactionItem
