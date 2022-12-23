import React from 'react'

type Props = {
    children: any
}

function ModalHeading({ children }: Props) {
    return (
        <h2 className='text-[#FF7F2C] font-bold text-2xl text-center mb-12'>{children}</h2>
    )
}

export default ModalHeading