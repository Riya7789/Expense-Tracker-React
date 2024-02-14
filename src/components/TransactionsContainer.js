import React from 'react'
import TransactionItem from './TransactionItem'

const TransactionsContainer = () => {
  return (
    <div className='transactionsContainer'>
      <h2>Transactions</h2>
        <input 
            type='text'
            placeholder='Search here...'
        />
      <TransactionItem/>
    </div>
  )
}

export default TransactionsContainer
