import React, { useContext } from 'react'

export const Props = () => {
    const {num} = useContext(User)
  return (
    <div>{num}</div>
  )
}

