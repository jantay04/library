import React from 'react'
import Card from '../../../Components/Card'
import PersonalSidebarLayout from '../../../Components/Layout/PersonalAreaLayout'
// import {dataBooks} from '../../../../data/books/books.json'
import BookCard from '../../../Components/BookCard'

type Props = {}


function Favorites({ }: Props) {

    return (
        <PersonalSidebarLayout>
            <div className='grid grid-cols-5'>
                {/* {dataBooks && dataBooks.map((item) =)} */}
            </div>

        </PersonalSidebarLayout>
    )
}

export default Favorites