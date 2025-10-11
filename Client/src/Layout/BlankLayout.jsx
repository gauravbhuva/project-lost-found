import React from 'react'

const BlankLayout = ({children}) => {
  return (
    <div className='h-dvh w-full flex item-center justify-center'>
        {children}
    </div>
  )
}

export default BlankLayout