import React, { useEffect, useState } from 'react'
import Card from '../../../Components/Card'
import PersonalSidebarLayout from '../../../Components/Layout/PersonalAreaLayout'
// import {dataBooks} from '../../../../data/books/books.json'
import axios from 'axios'
import BookCard from '../../../Components/BookCard'
import PersonalBodyHeading from '../../../Components/UI/PersonalBodyHeading'

type Props = {}

interface Books {
    id: number;
    name: string;
}


export type Book = {
    id: number,
    name: string,
    author: string,
    year: string,
    genre: string,
    description: string,
    rating: number,
    imageUrl: any,
    pdf: string
}


function Favorites({ }: Props) {

    const [loading, setLoading] = useState(false)

    const [appState, setAppState] = useState()

    const [bookLists, setBooklists] = useState<Book[] | null>()

    useEffect(() => {
        const apiUrl = 'http://localhost:4000/books';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setBooklists(allPersons);
        });
    }, [setBooklists]);

    return (
        <PersonalSidebarLayout>
            <PersonalBodyHeading>Ваша полка избранных книг</PersonalBodyHeading>
            <div className='mt-2 grid max-[500px]:grid-cols-2 grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3'>
                {bookLists && bookLists.map((book) => <div><BookCard id={book.id} name={book.name} author={book.author} bookUrl={book.imageUrl} rating={book.rating} /></div>)}
            </div>
        </PersonalSidebarLayout>
    )
}

export default Favorites