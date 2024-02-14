import React from 'react'
import AddTransaction from './AddTransaction'
import OverviewComponent from './OverviewComponent'
import TransactionsContainer from './TransactionsContainer'
const Tracker = () => {
  return (
    <div className='container'>
        <div className='contentWrapper'>
            <div className='header'>
                <h1>Expense Tracker</h1> 
            </div>
                <OverviewComponent/>
                <AddTransaction/>
                <div className='transactionDetails'> 
                    <div className='expense'>
                        Expense <br/><span><b>Rs.</b></span>
                    </div>
                    <div className='income'>
                        Income <br/><span><b>Rs.</b></span>
                    </div>
                </div>
                <TransactionsContainer/>
        </div>
    </div>
  )
}

export default Tracker
