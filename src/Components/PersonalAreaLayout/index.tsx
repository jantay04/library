import React, { Children } from 'react'
import PersonalAreaHeader from './PersonalAreaHeader';
import PersonalAreaSidebar from './PersonalAreaSidebar';



type Props = {
    children: React.ReactNode;
}



function Sidebar({ children }: Props) {



    return (
        <div className='flex h-screen w-full'>
            <PersonalAreaSidebar />
            <div className='py-[30px] px-[40px] w-full'>
                <PersonalAreaHeader />
                <div className='mt-[40px]'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Sidebar