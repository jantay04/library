import React from 'react'

type Props = {
    children: React.ReactNode;
}

function PersonalBodyHeading({ children }: Props) {
    return (
        <h2 className='font-bold text-xl text-[#1D324E] mb-[45px]'>{children}</h2>

    )
}

export default PersonalBodyHeading