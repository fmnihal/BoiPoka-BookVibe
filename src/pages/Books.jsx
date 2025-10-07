import React, { Suspense } from 'react';
// import {useEffect, useState} from 'react';
import Book from './Book';

const Books = ({data}) => {
    
    // const [allBooks, setAllBooks]= useState([]);
    // useEffect( ()=>{
    //     fetch("booksData.json").then(res=>res.json()).then(data=>{
    //         // console.log(data);
    //         setAllBooks(data);
    //     })
    // }, []);

    // const bookPromise= fetch('bookData.json').then(res=>res.json());

    

    return (
        <div>
            {/* <h1 className='text-3xl text-center p-6'>Hello ami books</h1> */}
            <Suspense fallback={<span>loading...</span>}>
            {
                // <Book bookPromise={bookPromise}></Book>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        data.map(singleBook => (
                        <Book key={singleBook.bookId} singleBook={singleBook} />
                    ))
                    }
                </div>
            }
            </Suspense>
        </div>
    );
};

export default Books;