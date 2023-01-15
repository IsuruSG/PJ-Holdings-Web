import Button from '@/Components/Button'
import React from 'react'

const ButtonComponent = () => {
  return (
    <div className='flex justify-center bg-gray-850 items-center h-screen'>
        <Button type='button' onClick={() => console.log("This is onClick function")} title="Send" />
    </div>
  )
}

export default ButtonComponent