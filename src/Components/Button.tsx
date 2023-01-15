import React from 'react'
import MUIButton from '@mui/material/Button'
import IButton from '@/Interfaces/IButton'

const Button: React.FC<IButton> = ({title, onClick, type}) => {
  return (
    <MUIButton type={type} className='bg-yellow-450 hover:bg-yellow-500 text-gray-850 normal-case font-semibold rounded-lg text-lg px-8' onClick={onClick} variant='contained' disableElevation>
        {title}
    </MUIButton>
  )
}

export default Button