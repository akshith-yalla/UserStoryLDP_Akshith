import React from 'react'
import Button from '../../atoms/Button';

const AccountSetup = (onSubmit: (data: any) => void) => {
  const data = {};

  const setUpAcc = () => {
    onSubmit(data)
  }

  return (
    <div>
      <input type="email" />
      <input type="text" />
      <Button onSubmit={setUpAcc} />
    </div>
  )
}

export default AccountSetup
