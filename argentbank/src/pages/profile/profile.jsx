import React from 'react'
import User from "../../component/user/user.jsx";
import Account from "../../component/account/account.jsx";
import Accountdata from '../../data/accountdata.json';

function profile() {
  return (
    <main className='main bg-dark'>
      <User />
      {Accountdata.map((data) =>(
        <Account 
        key={data.id}
        title={data.title}
        amount={data.amount}
        description={data.description}
        />
      ))}
    </main>
  )
}

export default profile
